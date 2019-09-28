
const messageAllStyle = `font-size: 16px; 
width: 70%; 
padding: 5px 5px; 
border-radius: 10px; 
margin-top: 2px; 
margin-bottom: 2px; 
text-align: left; 
position: relative; 
color: black;`;

const systemMessage = `align-self: center; 
color: #fff; 
background: #517779; 
text-align: center; 
width: 100%;`;

const pcMessage = `background-color: #efd03c; 
align-self: flex-start;`;

const playerMessage = `  align-self: flex-end; 
background-color: #ff8c00;`;


export const printMessagesStyle = {
    system: `${messageAllStyle} ${systemMessage}`,
    pc: `${messageAllStyle} ${pcMessage}`,
    player: `${messageAllStyle} ${playerMessage}`
};