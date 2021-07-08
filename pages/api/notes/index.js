import nc from 'next-connect'
import cors from 'cors'
import notes from '../../../data/data'

const handle = nc()

    .use(cors())

    .post((req, res) => {
        console.log(req.body)
        console.log(notes)
        const note = {
            ...req.body,
            id: Date.now()
        }
        notes.push(note)
        res.json({ data: notes })

    })

    .get((req, res) => {
        res.json({ data: notes })
    })


export default handle