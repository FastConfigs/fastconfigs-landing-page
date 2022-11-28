import ContactFile from "../file/contact.file"
const Contact = ({text, img}) => {
    const ConSearch = [
        {text, id: 1},

    ]

    return (
        <div>
            < ContactFile ConSearch = {ConSearch} text = "contact"/>

        </div>

    )
}
export default Contact