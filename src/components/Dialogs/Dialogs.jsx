import React from "react";
import s from "./Dialogs.module.css";
import Message from "./MessageItem/MessageItem";
import Dialog from "./DialogItem/DialogItem";


const Dialogs = (props) => {
    

    let dialogs = props.contents[0].map((elem)=>{
        return <Dialog id={elem.id} name={elem.name} />
    });

    let messages = props.contents[1].map(m => <Message message={m.message} />);

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