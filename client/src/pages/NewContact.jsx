import { useState, useMemo } from 'react';
import { useLocation } from 'wouter';
import { useContacts } from '../contexts/ContactsContext';

export default function NewContact() {
  const [, setLocation] = useLocation();
  const { addContact } = useContacts();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: ''
  });

  // Máscara de telefone
  const formatPhone = (value) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 11) {
      return numbers
        .replace(/^(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2');
    }
    return value.slice(0, 15);
  };

  const handlePhoneChange = (e) => {
    const formatted = formatPhone(e.target.value);
    setFormData(prev => ({ ...prev, phone: formatted }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Validação de email
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Verificar se o formulário está válido
  const isFormValid = useMemo(() => {
    return (
      formData.name.trim() !== '' &&
      formData.email.trim() !== '' &&
      isValidEmail(formData.email) &&
      formData.phone.trim() !== '' &&
      formData.phone.length >= 14 && // (XX) XXXXX-XXXX
      formData.category.trim() !== ''
    );
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      addContact(formData);
      setLocation('/');
    }
  };

  return (
    <div className="min-h-screen bg-[#f6f5fc] flex items-start justify-center pt-[111px] px-4">
      <div className="w-full max-w-[500px] flex flex-col">
        {/* Logo */}
        <div className="flex justify-center mb-[52px]">
          <img 
            src="/7-163.svg" 
            alt="MyContacts" 
            className="w-[201.38px] h-[34.04px]"
          />
        </div>

        {/* Botão Voltar */}
        <button 
          onClick={() => setLocation('/')}
          className="flex items-center gap-2 mb-[25px] text-[#5061fc] hover:opacity-70 transition-opacity"
        >
          <img 
            src="/7-254.svg" 
            alt="Voltar" 
            className="w-[21px] h-[14px]"
          />
          <span className="text-base font-semibold font-['Sora']">Voltar</span>
        </button>

        {/* Título */}
        <h1 className="text-2xl font-bold text-[#222222] mb-[54px]">
          Novo contato
        </h1>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-[16px]">
          {/* Campo Nome */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nome"
            className="w-full h-[52px] px-4 bg-white rounded shadow-[0px_4px_10px_0px_rgba(0,0,0,0.04)] text-base text-[#222222] placeholder:text-[#bcbcbc] focus:outline-none focus:ring-2 focus:ring-[#5061fc]"
          />

          {/* Campo E-mail */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-mail"
            className="w-full h-[52px] px-4 bg-white rounded shadow-[0px_4px_10px_0px_rgba(0,0,0,0.04)] text-base text-[#222222] placeholder:text-[#bcbcbc] focus:outline-none focus:ring-2 focus:ring-[#5061fc]"
          />

          {/* Campo Telefone */}
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handlePhoneChange}
            placeholder="Telefone"
            className="w-full h-[52px] px-4 bg-white rounded shadow-[0px_4px_10px_0px_rgba(0,0,0,0.04)] text-base text-[#222222] placeholder:text-[#bcbcbc] focus:outline-none focus:ring-2 focus:ring-[#5061fc]"
          />

          {/* Campo Categoria */}
          <div className="relative">
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full h-[52px] px-4 bg-white rounded shadow-[0px_4px_10px_0px_rgba(0,0,0,0.04)] text-base text-[#222222] appearance-none focus:outline-none focus:ring-2 focus:ring-[#5061fc]"
              style={{ color: formData.category ? '#222222' : '#bcbcbc' }}
            >
              <option value="" disabled>Categoria</option>
              <option value="instagram">Instagram</option>
              <option value="discord">Discord</option>
              <option value="linkedin">LinkedIn</option>
              <option value="facebook">Facebook</option>
              <option value="twitter">Twitter</option>
            </select>
            <img 
              src="/7-265.svg" 
              alt="Dropdown" 
              className="w-3 h-[9px] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
            />
          </div>

          {/* Botão Cadastrar */}
          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full h-[52px] rounded shadow-[0px_4px_10px_0px_rgba(0,0,0,0.04)] text-base font-semibold text-white transition-all ${
              isFormValid 
                ? 'bg-[#5061fc] hover:bg-[#3d4ec9] cursor-pointer' 
                : 'bg-[#bcbcbc] cursor-not-allowed'
            }`}
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
