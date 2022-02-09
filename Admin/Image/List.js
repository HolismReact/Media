import { List } from '@List'
import UpsertImage from './Upsert'

const card = (item) => {
    return <div>
        <img src={item.relatedItems.url} />
    </div>
}

const Images = () => {
    return <List
        title='Images'
        entityType='Image'
        card={card}
        upsert={UpsertImage}
    />
}

export default Images