import { List } from '@List'
import UpsertImage from './Upsert'

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
        upsert={UpsertImage}
        hasDelete={true}
    />
}

export default Images