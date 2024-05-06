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
        // Check if the user is an admin

        const isAdmin = await checkAdminRole(req.body.user_id);
        console.log(req.body.user_id)
        // Query the database based on user role
        let data;
        if (isAdmin) {
            // Admin can view all records
            const { data: allData, error } = await supabase.from('Contacts').select('*');
            if (error) {
                throw error;
            }
            data = allData;
        } else {
            // Regular user can view only their own records
            const { data: userData, error } = await supabase.from('Contacts').select('*').eq('Agent', req.body.user_id);
            if (error) {
                throw error;
            }
            data = userData;
        }

        res.send(data);
    } catch (error) {
        res.sendStatus(500).send({ error: 'Internal Server Error' });
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
        // Check if the user is an admin

        const isAdmin = await checkAdminRole(req.body.user_id);
        console.log(req.body.user_id)
        // Query the database based on user role
        let data;
        if (isAdmin) {
            // Admin can view all records
            const { data: allData, error } = await supabase.from('Deals').select('*');
            if (error) {
                throw error;
            }
            data = allData;
        } else {
            // Regular user can view only their own records
            const { data: userData, error } = await supabase.from('Deals').select('*').eq('Deal Owner', req.body.user_id);
            if (error) {
                throw error;
            }
            data = userData;
        }

        res.send(data);
    } catch (error) {
        res.sendStatus(500).send({ error: 'Internal Server Error' });
    }
});

app.post('/api/deals', async (req, res) => {
    try {
        console.log(req);
        const { data, error } = await supabase.from('Deals').insert({ id: req.body.id, title: req.body.title, value: req.body.value, column: req.body.column }).select();
        if (error) {
            throw error;
        }
        res.send(data);
    } catch (error) {
        console.log(error);
    }
});

// Function to check if user is an admin
async function checkAdminRole(userId) {
    try {
        // Query the "users" table to get user's role
        console.log(userId)
        const { data, error } = await supabase.from('users').select('Role').eq('user_id', userId);
        if (error) {
            throw error;
        }
        // Check if user is admin
        console.log(data)
        return data[0].Role == 'Admin';
    } catch (error) {
        console.error('Error checking admin role:', error.message);
        return false; // Default to regular user role if error occurs
    }
}


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

app.post('/api/accounts/view', async (req, res) => {
    try {
        // Check if the user is an admin

        const isAdmin = await checkAdminRole(req.body.user_id);
        console.log(req.body.user_id)
        // Query the database based on user role
        let data;
        if (isAdmin) {
            // Admin can view all records
            const { data: allData, error } = await supabase.from('Accounts').select('*');
            if (error) {
                throw error;
            }
            data = allData;
        } else {
            // Regular user can view only their own records
            const { data: userData, error } = await supabase.from('Accounts').select('*').eq('Account Owner', req.body.user_id);
            if (error) {
                throw error;
            }
            data = userData;
        }

        res.send(data);
    } catch (error) {
        res.sendStatus(500).send({ error: 'Internal Server Error' });
    }
});


app.post('/api/login', async (req, res) => {
    try {
        const { data, error } = await supabase.from('users').select('*').eq('email', req.body.email).eq('password', req.body.password);
        if (error) {
            throw error;
        }
        res.send(data);
    } catch (error) {
        console.log(error);
    }
});

app.listen(3300, () => { console.log("Server started on port 3300") })
