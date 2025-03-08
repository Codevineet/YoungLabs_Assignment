export const greetUser = (req, res) => {

    try {
        const name = req.query.name;
        if (name) {
            res.status(200).json({ message: `Hello ${name}! Welcome to YoungLabs` });
        }
        else {
            res.status(400).json({ message: 'Please provide a name' });
        }
    } catch (error) {
            res.status(500).json({ message: 'Server Error' });  
    }

}