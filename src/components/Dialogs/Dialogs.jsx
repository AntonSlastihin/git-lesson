import React from "react";
import s from "./Dialogs.module.css";
import Message from "./MessageItem/MessageItem";
import Dialog from "./DialogItem/DialogItem";


const Dialogs = (prots) => {
    let dialogData = [
        {id: 1, name: "Andrey"},
        {id: 2, name: "Anton"},
        {id: 3, name: "Maxim"},
        {id: 4, name: "Robert"},
        {id: 5, name: "Sveta"}
    ];
    let messageData = [
        {id: 1, message: "Hey!"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Ok."},
        {id: 1, message: "Hey!"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Ok."}
    ];

    let dialogs = dialogData.map((elem)=>{
        return <Dialog id={elem.id} name={elem.name} />
    });

    let messages = messageData.map(m => <Message message={m.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsNav}>
                <div className={s.dialogsItems}>
                    {dialogs}
                </div>
                <div className={s.messages}>
                    {messages}
                </div>
            </div>
        </div>
    );
}

export default Dialogs;