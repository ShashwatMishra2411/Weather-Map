import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mapp from './Components/js/Map';
import {Nav,Tab} from 'react-bootstrap'
import React,{useState} from 'react';
import Weather from './Components/js/Weather';
const convo_key = "conversations"
const contact_key="contacts"
function App() {
  let [activekey,setActiveKey] = useState(convo_key)
  let [latlng, setlatlng] = useState([])
  
  return (
    <Tab.Container activeKey={activekey} onSelect={setActiveKey}>
            <Nav variant='tabs' className='justify-content-center'>
                <Nav.Item>
                    <Nav.Link eventKey={convo_key} style={{color:"orange"}}>
                        Map
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey={contact_key} style={{color:"orange"}}>
                        Weather
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <Tab.Content className='overflow-auto flex-grow-1' >
            <Tab.Pane eventKey={convo_key}>
                <Mapp set={setlatlng}></Mapp>
            </Tab.Pane>
            <Tab.Pane eventKey={contact_key}>
                  <Weather coords={latlng}></Weather>
            </Tab.Pane>
            </Tab.Content>
            </Tab.Container>
  );
}

export default App;
