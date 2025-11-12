import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import SendIcon from '@mui/icons-material/Send';

export const Chatbot = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="bg-zinc-900 hover:bg-zinc-700 cursor-pointer text-white p-4 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2"
        >
          Chatbot
          <SmartToyIcon />
        </button>
      )}

      {open && (
        <div className="w-80 h-96 bg-white shadow-2xl rounded-2xl flex flex-col border border-gray-200">
          <div className="flex justify-between items-center bg-zinc-900 text-white p-3 rounded-t-2xl">
            <span className="font-semibold">Chatbot</span>
            <button className="cursor-pointer flex items-center gap-2" onClick={() => setOpen(false)}>
              <CloseIcon />
            </button>
          </div>

          <div className="flex-1 p-3 overflow-y-auto text-gray-700">
            <div className="text-sm text-gray-500 text-center mt-10">
              👋 Hola! ¿En qué puedo ayudarte hoy?
            </div>
          </div>

          <div className="p-3 border-t border-zinc-200 flex">
            <input
              type="text"
              placeholder="Escribe un mensaje..."
              className="flex-1 p-2 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
            />
            <button className="rounded-full ml-2 bg-zinc-900 text-white px-3 hover:bg-zinc-700 cursor-pointer flex items-center justify-center h-10 w-10">
              <SendIcon fontSize="small" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};