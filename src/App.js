// import "./App.css";
// import "./style.css";
import styled from "styled-components";
import React from "react";
// import LifecycleEx from "./LifecycleEx";
//import BucketList from "./BucketList";
// import BucketLists from "./BucketLists";
import BucketListss from "./BucketListss";

//클래스형
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: ["영화관 가기", "매일 책읽기", "수영 배우기"],
    };

    //Ref
    this.text = React.createRef();
  }

  componentDidMount() {
  }

  // ...스프레드 문법 : [...this.state.list, 넣고 싶었던 어떤 값]
  addBucket = () => {
    //console.log(this.text.current.value);
    const new_item = this.text.current.value;
    this.setState({list : [...this.state.list, new_item]});
  }

  render() {
    //console.log(this.state.list);
    return (
      <Back>
        <Container>
          {/* <div className="container"> */}
            <BucketListss list={this.state.list} />
          {/* </div> */}
        </Container>
        <Insert>
            <input type="text" ref={this.text}/>
            <button onClick={this.addBucket}>추가</button>
        </Insert>
      </Back>
    );
  }
  //props=>list_a로 넘어간다
}

//함수형
// function App() {
//   return (
//     <div className="App">
//         <BucketList />
//     </div>
//   );
// }
// const MyStyled = styled.div`
//   width : 50vw;
//   min-height : 150px;
//   background-color : purple;
// `
const Back = styled.div`
  background-color: #F3E9DD;
  display : flex;
  flex-direction : column;
  justify-content : center;
  align-items : center;
  height : 100vh;
`;

const Container = styled.div`
  background-color: white;
  width: 50vw;
  max-width: 350px;
  margin: auto;
  height: 70vh;
  padding: 16px;
  border-radius: 10px;
`;


const Insert = styled.div`
  margin : 50px;
  padding : 0;
  input {
    width : 200px;
    border : none;
    padding : 10px;
    border-radius : 5px;
  }
 
  button {
    margin-left : 10px;
  }
`;
export default App;
