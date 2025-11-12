import { useState } from 'react';

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  category: string;
}

export default function Home() {
  const [contacts] = useState<Contact[]>([
    {
      id: 1,
      name: 'Mateus Silva',
      email: 'mateus@devacademy.com.br',
      phone: '(41) 99999-9999',
      category: 'instagram'
    },
    {
      id: 2,
      name: 'Mateus Silva',
      email: 'mateus@devacademy.com.br',
      phone: '(41) 99999-9999',
      category: 'instagram'
    },
    {
      id: 3,
      name: 'Mateus Silva',
      email: 'mateus@devacademy.com.br',
      phone: '(41) 99999-9999',
      category: 'instagram'
    }
  ]);

  return (
    <div className="min-h-screen bg-[#f6f5fc] flex items-start justify-center pt-[66px] px-4">
      <div className="w-full max-w-[500px] flex flex-col">
        {/* Logo */}
        <div className="flex justify-center mb-[83px]">
          <img 
            src="/7-4.svg" 
            alt="MyContacts" 
            className="w-[201.38px] h-[34.04px]"
          />
        </div>

        {/* Search Input */}
        <div className="relative mb-[32px]">
          <input
            type="text"
            placeholder="Pesquisar contato..."
            className="w-full h-[50px] px-4 bg-white rounded-[25px] text-base text-[#222222] placeholder:text-[#bcbcbc] focus:outline-none focus:ring-2 focus:ring-[#5061fc]"
          />
        </div>

        {/* Divider */}
        <div className="h-[2px] bg-[#bcbcbc] opacity-20 rounded-[1px] mb-[17px]" />

        {/* Header with count and button */}
        <div className="flex items-center justify-between mb-[26px]">
          <h1 className="text-2xl font-bold text-[#222222]">
            {contacts.length} contatos
          </h1>
          <button className="h-[43px] px-[14px] border-2 border-[#5061fc] rounded text-base font-semibold text-[#5061fc] hover:bg-[#5061fc] hover:text-white transition-colors">
            Novo contato
          </button>
        </div>

        {/* Contacts List Header */}
        <div className="flex items-center gap-2 mb-[26px]">
          <span className="text-base font-semibold text-[#5061fc]">Nome</span>
          <img 
            src="/48-4.svg" 
            alt="Sort" 
            className="w-[10.33px] h-[15.50px]"
          />
        </div>

        {/* Contacts List */}
        <div className="flex flex-col gap-[16px]">
          {contacts.map((contact) => (
            <div 
              key={contact.id}
              className="bg-white rounded shadow-[0px_4px_10px_0px_rgba(0,0,0,0.04)] p-4 h-[96px] flex items-center justify-between"
            >
              <div className="flex flex-col gap-[2px]">
                <div className="flex items-center gap-2 mb-[2px]">
                  <span className="text-base font-semibold text-[#222222]">
                    {contact.name}
                  </span>
                  <div className="bg-[#e0e3ff] rounded h-[21px] px-[6px] flex items-center justify-center">
                    <span className="text-xs font-bold text-[#5061fc] uppercase leading-none">
                      {contact.category}
                    </span>
                  </div>
                </div>
                <span className="text-sm text-[#bcbcbc] leading-[22px]">
                  {contact.email}
                </span>
                <span className="text-sm text-[#bcbcbc] leading-[22px]">
                  {contact.phone}
                </span>
              </div>

              <div className="flex items-center gap-[9px]">
                <button 
                  className="w-[20.12px] h-[20.12px] hover:opacity-70 transition-opacity flex items-center justify-center"
                  aria-label="Editar contato"
                >
                  <img 
                    src="/7-50.svg" 
                    alt="Editar" 
                    className="w-full h-full"
                  />
                </button>
                <button 
                  className="w-[18px] h-[22px] hover:opacity-70 transition-opacity flex items-center justify-center"
                  aria-label="Deletar contato"
                >
                  <img 
                    src="/7-51.svg" 
                    alt="Deletar" 
                    className="w-full h-full"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
