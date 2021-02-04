import React, {useState, useEffect} from 'react'
import {
    TabContent,
    TabPane,
    Button,
    Container,
    Row,
    Col,
    Label,
    FormGroup
} from 'reactstrap';
import Form from "reactstrap/es/Form";
import ImageUploading from 'react-images-uploading';
import FirstInput from "./components/FirstInput";
import SecondInput from "./components/SecondInput";
import FourthInput from "./components/FourthInput";

const initialData = {
    header: "",
    description: "",
    status: false,
    number: "",
    email: "",
    images: [],
    service1: false,
    service2: false,
    service3: false,
    service4: false,
    service5: false
}

export default function FormTask() {

    const [activeTab, setActiveTab] = useState(1)
    const [images, setImages] = useState([]);
    const maxNumber = 5;
    const [data, setData] = useState({})

    useEffect(() => setData(initialData), [])

    const setFormObject = (data, fn) => ({target}) => {
        const value = target.type === 'checkbox' ? target.checked : target.value;

        return fn({...data, [target.name]: value})
    }

    function saveData(e) {
        e.preventDefault()
        setData({...data, images: images})
        console.log('Success')
    }


    const onChange = (imageList) => {
        setImages(imageList);
    };

    function nextTab() {
        setActiveTab(Math.min((activeTab + 1), 4))
    }

    function previousTab() {
        setActiveTab(Math.max((activeTab - 1), 1))
    }

    return (
        <Container>
            <Form>
                <TabContent activeTab={activeTab.toString()}>
                    <TabPane tabId="1">
                        <FirstInput value={data} onChange={setFormObject(data, setData)}/>
                    </TabPane>
                    <TabPane tabId="2">
                        <SecondInput value={data} onChange={setFormObject(data, setData)}/>
                    </TabPane>
                    <TabPane tabId="3">
                        <FormGroup>
                            <Row>
                                <Col md={{offset: 4}}>
                                    <Label>Загрузка фотографий</Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={{offset: 4}}>
                                    <ImageUploading
                                        multiple
                                        value={images}
                                        onChange={onChange}
                                        maxNumber={maxNumber}
                                        dataURLKey="data_url"
                                    >
                                        {({
                                              imageList,
                                              onImageUpload,
                                              onImageRemoveAll,
                                              onImageUpdate,
                                              onImageRemove,
                                              isDragging,
                                              dragProps,
                                          }) => (
                                            <div className="upload__image-wrapper">
                                                <Container>
                                                    <Row>
                                                        <Col sm="5">
                                                            <Button color="primary"
                                                                    style={isDragging ? {color: 'red'} : undefined}
                                                                    onClick={event => {
                                                                        event.preventDefault();
                                                                        onImageUpload();
                                                                    }}
                                                                    {...dragProps}
                                                            >
                                                                Нажми и перетяни сюда изображение
                                                            </Button>
                                                        </Col>
                                                        <Col>
                                                            <Button color="danger" onClick={onImageRemoveAll}>Удалить
                                                                все</Button>
                                                        </Col>
                                                    </Row>
                                                </Container>
                                                {imageList.map((image, index) => (
                                                    <Container>
                                                        <Row>
                                                            <Col md={{offset: 4}}>
                                                                <img src={image['data_url']} alt="" width="100"/>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col xs="2" md={{offset: 2}}>
                                                                <Button onClick={(e) => {
                                                                    e.preventDefault();
                                                                    onImageUpdate(index)
                                                                }}>Изменить</Button>
                                                            </Col>
                                                            <Col xs="2" md={{offset: 2}}>
                                                                <Button onClick={(e) => {
                                                                    e.preventDefault()
                                                                    onImageRemove(index)
                                                                }}>Удалить</Button>
                                                            </Col>
                                                        </Row>
                                                    </Container>
                                                ))}
                                            </div>
                                        )}
                                    </ImageUploading>
                                </Col>
                            </Row>
                        </FormGroup>
                    </TabPane>
                    <TabPane tabId="4">
                        <FourthInput onChange={setFormObject(data, setData)}/>
                    </TabPane>
                </TabContent>
            </Form>
            <Container>
                <Row>
                    <Col xs={"2"} md={{offset: 4}}>
                        {activeTab !== 1 ? (
                            <Button block disabled={activeTab === 1} color="secondary" onClick={previousTab}>
                                prev
                            </Button>) : null}
                    </Col>
                    <Col xs={"2"}>
                        {
                            activeTab === 4 ? (
                                <Button color="primary" block onClick={saveData}>
                                    Save
                                </Button>
                            ) : (
                                <Button color="primary" block onClick={nextTab}>
                                    next
                                </Button>
                            )
                        }
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}