import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { motion } from "framer-motion";
import { Sidebar } from "../layouts/SideLayout";
import { FiEdit2 } from "react-icons/fi";
import { TbFileImport } from "react-icons/tb";

export const DealsKanban = () => {
  return (
    <div>
      <Sidebar />
      <div className="dashboard-content mx-auto ml-64 bg-neutral-850 rounded-md">
        <h1 className="text-2xl font-light mb-1 text-white">Deals</h1>
        <button className="bg-lime-500 hover:bg-lime-600 text-white text-sm font-bold mt-2 px-3 py-1.5 rounded-full text-center inline-flex items-center">
          <FiPlus />
          Add deal
        </button>
        <button className="ml-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold mt-1 px-3 py-1.5 text-center inline-flex items-center rounded-full">
          <TbFileImport />
          Import
        </button>
        <Board />
      </div>
    </div>
  );
};

const Board = () => {
  const [cards, setCards] = useState(DEFAULT_CARDS);

  return (
    <div className="flex h-full w-full gap-3 overflow-scroll mt-5">
      <Column
        title="Prospecting"
        column="Prospecting"
        headingColor="text-yellow-200"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="Demonstration"
        column="Demo"
        headingColor="text-lime-100"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="Proposal"
        column="Proposal"
        headingColor="text-lime-200"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="Negotiation"
        column="Negotiation"
        headingColor="text-lime-300"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="Closed"
        column="Closed"
        headingColor="text-lime-500"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="Lost"
        column="Lost"
        headingColor="text-red-500"
        cards={cards}
        setCards={setCards}
      />
    </div>
  );
};

const Column = ({ title, headingColor, cards, column, setCards }) => {
  const [active, setActive] = useState(false);

  const handleDragStart = (e, card) => {
    e.dataTransfer.setData("cardId", card.id);
  };

  const handleDragEnd = (e) => {
    const cardId = e.dataTransfer.getData("cardId");

    setActive(false);
    clearHighlights();

    const indicators = getIndicators();
    const { element } = getNearestIndicator(e, indicators);

    const before = element.dataset.before || "-1";

    if (before !== cardId) {
      let copy = [...cards];

      let cardToTransfer = copy.find((c) => c.id === cardId);
      if (!cardToTransfer) return;
      cardToTransfer = { ...cardToTransfer, column };

      copy = copy.filter((c) => c.id !== cardId);

      const moveToBack = before === "-1";

      if (moveToBack) {
        copy.push(cardToTransfer);
      } else {
        const insertAtIndex = copy.findIndex((el) => el.id === before);
        if (insertAtIndex === undefined) return;

        copy.splice(insertAtIndex, 0, cardToTransfer);
      }

      setCards(copy);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    highlightIndicator(e);

    setActive(true);
  };

  const clearHighlights = (els) => {
    const indicators = els || getIndicators();

    indicators.forEach((i) => {
      i.style.opacity = "0";
    });
  };

  const highlightIndicator = (e) => {
    const indicators = getIndicators();

    clearHighlights(indicators);

    const el = getNearestIndicator(e, indicators);

    el.element.style.opacity = "1";
  };

  const getNearestIndicator = (e, indicators) => {
    const DISTANCE_OFFSET = 50;

    const el = indicators.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();

        const offset = e.clientY - (box.top + DISTANCE_OFFSET);

        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1],
      }
    );

    return el;
  };

  const getIndicators = () => {
    return Array.from(document.querySelectorAll(`[data-column="${column}"]`));
  };

  const handleDragLeave = () => {
    clearHighlights();
    setActive(false);
  };

  const filteredCards = cards.filter((c) => c.column === column);

  return (
    <div className="w-56 shrink-0">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-medium ${headingColor}`}>
          {title}{" "}
          <span className="bg-neutral-700 text-white font-medium px-2.5 py-0.5 rounded-md text-sm text-neutral-400">
            {" "}
            {filteredCards.length}
          </span>
        </h3>
      </div>
      <div
        onDrop={handleDragEnd}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`h-full w-full transition-colors ${
          active ? "bg-neutral-800/50" : "bg-neutral-800/0"
        }`}
      >
        {filteredCards.map((c) => {
          return <Card key={c.id} {...c} handleDragStart={handleDragStart} />;
        })}
        <DropIndicator beforeId={null} column={column} />
        <AddCard column={column} setCards={setCards} />
      </div>
    </div>
  );
};

const Card = ({ title, id, column, value, productName, handleDragStart }) => {
  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <motion.div
        layout
        layoutId={id}
        draggable="true"
        onDragStart={(e) => handleDragStart(e, { title, id, column })}
        className={`cursor-grab rounded hover:shadow-2xl bg-neutral-800 p-3 active:cursor-grabbing ${
          column === "Lost" ? "border-red-700 bg-red-500 opactiy-25" : ""
        }`}
      >
        <p className="text-sm text-neutral-100">{title}</p>
        <p className="text-sm text-neutral-100">{value}</p>
        {productName ? (
          <span
            className={`bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded ${
              column === "Lost" ? "bg-red-200 text-red-800" : ""
            }`}
          >
            {productName}
          </span>
        ) : (
          <p className="text-sm text-neutral-100">{value}</p>
        )}
        <div className="ml-44 text-white px-2 hover:bg-gray-700 rounded-md px-4 py-1 pr-6">
          <FiEdit2 />
        </div>
      </motion.div>
    </>
  );
};

const DropIndicator = ({ beforeId, column }) => {
  return (
    <div
      data-before={beforeId || "-1"}
      data-column={column}
      className="my-0.5 h-0.5 w-full bg-lime-400 opacity-0"
    />
  );
};

const AddCard = ({ column, setCards }) => {
  const [text, setText] = useState("");
  const [adding, setAdding] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim().length) return;

    const newCard = {
      column,
      title: text.trim(),
      id: Math.random().toString(),
    };

    setCards((pv) => [...pv, newCard]);

    setAdding(false);
  };

  return (
    <>
      {adding ? (
        <motion.form layout onSubmit={handleSubmit}>
          <textarea
            onChange={(e) => setText(e.target.value)}
            autoFocus
            placeholder="Add new Deal..."
            className="w-full rounded border border-lime-400 bg-lime-400/20 p-3 text-sm text-neutral-50 focus:outline-0"
          />
          <div className="mt-1.5 flex items-center justify-end gap-1.5">
            <button
              onClick={() => setAdding(false)}
              className="px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
            >
              Close
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 rounded bg-neutral-50 px-3 py-1.5 text-xs text-neutral-950 transition-colors hover:bg-neutral-300"
            >
              <span>Add</span>
              <FiPlus />
            </button>
          </div>
        </motion.form>
      ) : (
        <motion.button
          layout
          onClick={() => setAdding(true)}
          className="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
        >
          <span>Add deal</span>
          <FiPlus />
        </motion.button>
      )}
    </>
  );
};

const DEFAULT_CARDS = [
  // Prospecting
  {
    title: "Deal 1",
    id: "1",
    column: "Prospecting",
    value: "$100",
    productName: "Test Product",
  },
  {
    title: "Deal 2",
    id: "6",
    column: "Prospecting",
    value: "$120",
    productName: "Test Product2",
  },

  // Demo
  {
    title: "Deal 3",
    id: "2",
    column: "Demo",
    value: "$250",
    productName: "Product4",
  },
  {
    title: "Deal 4",
    id: "3",
    column: "Proposal",
    value: "$275",
    productName: "Product5",
  },
  // Proposal
  {
    title: "Deal 9",
    id: "4",
    column: "Close",
    value: "$250",
    productName: "Product4",
  },
  {
    title: "Deal 5",
    id: "5",
    column: "Close",
    value: "$250",
    productName: "Product4",
  },

  {
    title: "Deal 7",
    id: "7",
    column: "Lost",
    value: 400,
    productName: "Product3",
  },
];
