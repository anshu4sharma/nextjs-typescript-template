import Container from "components/Container";
import React, { useEffect, useRef, useState } from "react";
import { socketServer } from "utils/websocket";
const Index = () => {
  const [message, setmessage] = useState<any[]>([]);
  const inputref = useRef<HTMLInputElement | null>(null);
  const msgref = useRef<HTMLDivElement | null>(null);
  const [name, setName] = useState("");
  const scrolltoView = () => {
    let windowHeight = window.innerHeight;
    if (msgref.current?.lastChild) {
      msgref.current?.lastChild.scrollIntoView() ||
        window.scrollTo(0, windowHeight * windowHeight);
    }
  };
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    socketServer.emit("new_message", {
      name: name,
      message: inputref?.current?.value,
    });
    setmessage((prev) => [
      ...prev,
      {
        name: name,
        message: inputref?.current?.value,
      },
    ]);
  };
  type Tmessage = {
    name: string;
    message: string;
  };

  useEffect(() => {
    socketServer.on("receivedmsg", (data) => {
      setmessage((prev) => [...prev, data]);
    });
  }, []);

  useEffect(() => {
    scrolltoView()
  }, [message , msgref.current?.lastChild]);

  return (
    <Container>
      <input
        type="text"
        className="input input-bordered"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="my-modal" className="btn">
        open modal
      </label>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div  className="modal-box relative">
          {message?.map((msg, Index) => {
            return (
              <div
                key={Index}
                ref={msgref}
                className={
                  msg.name === name ? "chat chat-end" : "chat chat-start"
                }
              >
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img
                      src={`https://api.dicebear.com/5.x/initials/svg?seed=${msg.name}`}
                      alt="avatar"
                    />
                  </div>
                </div>
                <div className="chat-header capitalize">
                  {msg.name}
                  <time className="text-xs ml-2 opacity-50">12:45</time>
                </div>
                <div className="chat-bubble"> {msg.message}</div>
                <div className="chat-footer opacity-50">Delivered</div>
              </div>
            );
          })}


          <div className="modal-action">
            <label
              htmlFor="my-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
          </div>
          <form onSubmit={handleSubmit} className="w-full gap-4 flex">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-group-md w-3/4 focus:outline-none"
              ref={inputref}
              name="message"
              autoComplete="off"
            />
            <button onClick={handleSubmit} className="btn w-1/4">
              send
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Index;
