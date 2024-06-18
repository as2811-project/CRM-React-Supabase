const express = require('express')
const app = express()
const supabase = require('./supabase.js')
const bcrypt = require('bcrypt');
const cors = require('cors');


app.use(express.json());
app.use(cors());

app.post('/auth/login', async (req, res) => {
    console.log(req.body.email)
    const { data, error } = await supabase.auth.signInWithPassword({ email: req.body.email, password: req.body.password });
    if (error) {
        throw error;
    }
    accessToken = data.session.access_token;
    //console.log(accessToken);
    res.json(data);
})

app.post('/auth/logout', async (req, res) => {
    const { error } = await supabase.auth.signOut()
    if (error) {
        throw error;
    }
    res.sendStatus(200)
})

app.get('/api/contacts', async (req, res) => {
    try {
        //supabase.auth.api.getUser(access_token)
        const { count, error } = await supabase.from('Contacts').select("*", { count: 'exact', head: true });
        if (error) {
            throw error;
        }
        console.log(count)
        res.json(count);
    } catch (error) {
        console.log(error);
    }
});

app.get('/api/contacts/:id', async (req, res) => {
    try {
        const { count, error } = await supabase.from('Contacts').select("*").eq('contact_id', req.params.id);
        if (error) {
            throw error;
        }
        console.log(count)
        res.json(count);
    } catch (error) {
        res.sendStatus(500).send({ error: 'Internal server error' });
    }
});

app.listen(3300, () => { console.log("Server started on port 3300") })