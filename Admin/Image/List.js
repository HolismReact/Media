import { List } from '@List'
import CreateImage from './Create'

const card = (item) => {
    return <div className="w-full h-full">
        <img className="w-full h-full object-cover" src={item.relatedItems.url} />
    </div>
}

const Images = () => {
    return <List
        title='Images'
        entityType='Image'
        card={card}
        multicolumn={true}
        create={CreateImage}
        hasDelete={true}
    />
}

export default Images