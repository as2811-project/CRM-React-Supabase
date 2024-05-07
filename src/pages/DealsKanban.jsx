import React, { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { motion } from "framer-motion";
import { Sidebar } from "../layouts/SideLayout";
import { FiEdit2 } from "react-icons/fi";
import { TbFileImport } from "react-icons/tb";
import { supabase } from "../utils/supabase";
import { ImportModal } from "../components/modals/ImportDeals";

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
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("/api/deals/view", {
      method: "POST", // Corrected method to POST
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user_id: sessionStorage.getItem("user_id").replace(/["]+/g, ""),
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        setCards(response);
      });
  }, []);
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
        column="Demonstration"
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

  const handleDragEnd = async (e) => {
    const cardId = e.dataTransfer.getData("cardId");

    setActive(false);
    clearHighlights();

    const indicators = getIndicators();
    const { element } = getNearestIndicator(e, indicators);
    const newColumn = element.dataset.column; // Get the new column from the drop position

    if (newColumn) {
      try {
        // Update the deal in the database with the new column value
        await updateDeal(cardId, newColumn);
      } catch (error) {
        console.error("Error updating deal:", error);
      }
    }
  };
  const updateDeal = async (cardId, newColumn) => {
    try {
      const { data, error } = await supabase
        .from("Deals")
        .update({ column: newColumn })
        .eq("id", cardId);

      if (error) {
        throw new Error(error.message);
      }

      console.log(`Deal stage updated successfully: ${newColumn}`);
      const updatedCards = cards.map((card) =>
        // === was the issue
        card.id == cardId ? { ...card, column: newColumn } : card
      );
      setCards(updatedCards);
    } catch (error) {
      console.error("Error updating deal column in database:", error.message);
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

const CardSkeleton = () => {
  // Define the skeleton layout
  return (
    <div className="skeleton-card rounded hover:shadow-2xl border border-neutral-600 bg-neutral-900 mt-2 p-3">
      <div className="skeleton-card-placeholder h-2 rounded-md w-full mb-2"></div>{" "}
      {/* Placeholder for title */}
      <div className="skeleton-card-placeholder h-4 rounded-md w-full mb-2"></div>{" "}
      {/* Placeholder for value */}
      <div className="skeleton-card-placeholder h-4 rounded-md  me-2 px-2.5 py-0.5 rounded"></div>{" "}
    </div>
  );
};

const Card = ({ title, id, column, value, productName, handleDragStart }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust this timeout as needed

    // Cleanup function
    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <CardSkeleton />;
  }
  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <motion.div
        layout
        layoutId={id}
        draggable="true"
        onDragStart={(e) => handleDragStart(e, { title, id, column })}
        className={`cursor-grab rounded-md hover:shadow-2xl bg-neutral-700 pb-3 p-3 active:cursor-grabbing ${
          column === "Lost" ? "border-red-700 bg-red-500 opactiy-25" : ""
        }`}
      >
        <p className="text-neutral-100">{title}</p>
        <p className="text-sm text-neutral-100">${value}</p>
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
      value: text.trim(),
    };

    setCards((pv) => [...pv, newCard]);

    setAdding(false);
  };

  return (
    <>
      {adding ? (
        <motion.form layout onSubmit={handleSubmit}>
          <div className="bg-neutral-900">
            <input
              onChange={(e) => setText(e.target.value)}
              autoFocus
              placeholder="Add Deal Title"
              type="text"
              className="w-full rounded border border-lime-400 bg-lime-400/20 p-2 mb-2 text-sm text-neutral-50 focus:outline-0"
            ></input>
            <input
              onChange={(e) => setText(e.target.value)}
              autoFocus
              placeholder="Add Deal Value"
              type="text"
              className="w-full rounded border border-lime-400 bg-lime-400/20 p-2 mb-2 text-sm text-neutral-50 focus:outline-0"
            ></input>
            <input
              onChange={(e) => setText(e.target.value)}
              autoFocus
              placeholder="Add Deal Product"
              type="text"
              className="w-full rounded border border-lime-400 bg-lime-400/20 p-2text-sm text-neutral-50 focus:outline-0"
            ></input>
          </div>
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
