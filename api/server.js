const express = require('express')
const app = express()
const supabase = require('./supabase.js')

app.get('/api/contacts', async (req, res) => {
    try {
        const { count, error } = await supabase.from('Contacts').select("*", { count: 'exact', head: true });
        if (error) {
            throw error;
        }
        console.log(count);
        res.json(count);
    } catch (error) {
        res.sendStatus(500).send({ error: 'Internal server error' });
    }
});

app.get('/api/contacts/view', async (req, res) => {
    try {
        const { data, error } = await supabase.from('Contacts').select("*");
        if (error) {
            throw error;
        }
        console.log(data);
        res.json(data);
    } catch (error) {
        res.sendStatus(500).send({ error: 'Internal server error' });
    }
});



app.get('/api/deals', async (req, res) => {
    try {
        const { count, error } = await supabase.from('Deals').select("*", { count: 'exact', head: true });
        if (error) {
            throw error;
        }
        console.log(count);
        res.json(count);
    } catch (error) {
        res.sendStatus(500).send({ error: 'Internal server error' });
    }
});


app.listen(3300, () => { console.log("Server started on port 3300") })
