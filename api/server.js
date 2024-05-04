const express = require('express')
const app = express()
const supabase = require('./supabase.js')

app.use(express.json());
app.get('/api/contacts', async (req, res) => {
    try {
        const { count, error } = await supabase.from('Contacts').select("*", { count: 'exact', head: true });
        if (error) {
            throw error;
        }
        res.json(count);
    } catch (error) {
        res.sendStatus(500).send({ error: 'Internal server error' });
    }
});

app.post('/api/contacts/view', async (req, res) => {
    try {
        const { data, error } = await supabase.from('Contacts').select('*').eq('Agent', req.body.user_id);
        if (error) {
            throw error;
        }
        //console.log(data[0].email)
        res.send(data);
    } catch (error) {
        //res.sendStatus(500).send({ error: 'Internal Server Error' });
    }
});

app.get('/api/deals', async (req, res) => {
    try {
        const { count, error } = await supabase.from('Deals').select("*", { count: 'exact', head: true });
        if (error) {
            throw error;
        }
        res.json(count);
    } catch (error) {
        //res.sendStatus(500).send({ error: 'Internal server error' });
    }
});

app.post('/api/deals/view', async (req, res) => {
    try {
        const { data, error } = await supabase.from('Deals').select('*').eq('Deal Owner', req.body.user_id);
        if (error) {
            throw error;
        }
        res.send(data);
    } catch (error) {
        res.sendStatus(500).send({ error: 'Internal Server Error' });
    }
});

app.get('/api/accounts', async (req, res) => {
    try {
        const { count, error } = await supabase.from('Accounts').select("*", { count: 'exact', head: true });
        if (error) {
            throw error;
        }
        res.json(count);
    } catch (error) {
        res.sendStatus(500).send({ error: 'Internal server error' });
    }
});

app.get('/api/accounts/view', async (req, res) => {
    try {
        const { data, error } = await supabase.from('Accounts').select('account_id,company_name,phone_number');
        if (error) {
            throw error;
        }
        res.json(data);
    } catch (error) {
        res.sendStatus(500).send({ error: 'Internal Server Error' });
    }
});


app.post('/api/login', async (req, res) => {
    try {
        const { data, error } = await supabase.from('users').select('*').eq('email', req.body.email);
        if (error) {
            throw error;
        }
        //console.log(data[0].email)
        res.send(data);
    } catch (error) {
        //res.sendStatus(500).send({ error: 'Internal Server Error' });
    }
});

app.listen(3300, () => { console.log("Server started on port 3300") })
