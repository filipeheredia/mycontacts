import { createContext, useContext, useState } from 'react';

const ContactsContext = createContext();

export function ContactsProvider({ children }) {
  const [contacts, setContacts] = useState([
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

  const addContact = (contact) => {
    const newContact = {
      ...contact,
      id: Date.now()
    };
    setContacts(prev => [...prev, newContact]);
  };

  const updateContact = (id, updatedContact) => {
    setContacts(prev => 
      prev.map(contact => 
        contact.id === id ? { ...contact, ...updatedContact } : contact
      )
    );
  };

  const deleteContact = (id) => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  return (
    <ContactsContext.Provider value={{ contacts, addContact, updateContact, deleteContact }}>
      {children}
    </ContactsContext.Provider>
  );
}

export function useContacts() {
  const context = useContext(ContactsContext);
  if (!context) {
    throw new Error('useContacts must be used within a ContactsProvider');
  }
  return context;
}
