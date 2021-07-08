import nc from 'next-connect';
import cors from 'cors'


const handle = nc()

    .use(cors())

    .get((req, res) => {

        res.send('Hello world')
    })


export default handle