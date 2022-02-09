import { Form, Upload } from '@Form'

const inputs = <>
    <Upload
        column='Image'
        multiple={true}
    />
</>

const UpsertImage = () => {
    return <Form
        title='Upload image(s)'
        entityType='Image'
        inputs={inputs}
    />
}

export default UpsertImage