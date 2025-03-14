'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function TransactionsList() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedPeriod, setSelectedPeriod] = useState('all');
  const [selectedGiftCard, setSelectedGiftCard] = useState('all');

  // Mock data for transactions
  const transactions = [
    { id: 'T001', data: '12/03/2025', giftCard: 'GC001', fornecedor: 'Amazon', valor: 10, usuario: 'Maria Costa', descricao: 'Compra de livro', status: 'Concluída' },
    { id: 'T002', data: '11/03/2025', giftCard: 'GC002', fornecedor: 'Netflix', valor: 15, usuario: 'João Silva', descricao: 'Assinatura mensal', status: 'Concluída' },
    { id: 'T003', data: '10/03/2025', giftCard: 'GC003', fornecedor: 'Spotify', valor: 0, usuario: 'João Silva', descricao: 'Cadastro inicial', status: 'Concluída' },
    { id: 'T004', data: '09/03/2025', giftCard: 'GC004', fornecedor: 'Steam', valor: 25, usuario: 'Carlos Gomes', descricao: 'Compra de jogo', status: 'Pendente' },
    { id: 'T005', data: '08/03/2025', giftCard: 'GC005', fornecedor: 'Uber', valor: 30, usuario: 'Ana Souza', descricao: 'Viagem', status: 'Concluída' },
    { id: 'T006', data: '07/03/2025', giftCard: 'GC001', fornecedor: 'Amazon', valor: 20, usuario: 'Maria Costa', descricao: 'Compra de eletrônicos', status: 'Concluída' },
    { id: 'T007', data: '06/03/2025', giftCard: 'GC006', fornecedor: 'Amazon', valor: 50, usuario: 'Pedro Santos', descricao: 'Compra de presente', status: 'Cancelada' },
    { id: 'T008', data: '05/03/2025', giftCard: 'GC007', fornecedor: 'Google Play', valor: 15, usuario: 'Lucia Oliveira', descricao: 'Aplicativo premium', status: 'Concluída' },
    { id: 'T009', data: '04/03/2025', giftCard: 'GC008', fornecedor: 'Apple Store', valor: 10, usuario: 'Roberto Alves', descricao: 'Compra de música', status: 'Concluída' },
    { id: 'T010', data: '03/03/2025', giftCard: 'GC009', fornecedor: 'PlayStation', valor: 60, usuario: 'Fernanda Lima', descricao: 'Jogo digital', status: 'Pendente' },
  ];

  // Filter transactions based on selected filters
  const filteredTransactions = transactions.filter(transaction => {
    const statusMatch = selectedStatus === 'all' || transaction.status.toLowerCase() === selectedStatus.toLowerCase();
    const giftCardMatch = selectedGiftCard === 'all' || transaction.giftCard === selectedGiftCard;
    
    // Period filtering logic would be more complex in a real application
    const periodMatch = selectedPeriod === 'all'; // Simplified for demo
    
    return statusMatch && giftCardMatch && periodMatch;
  });

  // Get unique gift cards for filter dropdown
  const giftCards = [...new Set(transactions.map(transaction => transaction.giftCard))];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`bg-blue-800 text-white ${sidebarOpen ? 'w-64' : 'w-20'} transition-all duration-300 ease-in-out`}>
        <div className="p-4 flex items-center justify-between">
          {sidebarOpen ? (
            <h1 className="text-2xl font-bold">CardVault</h1>
          ) : (
            <h1 className="text-2xl font-bold">CV</h1>
          )}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <nav className="mt-8">
          <div className="px-4 mb-6">
            {sidebarOpen && <h2 className="text-xs uppercase text-blue-200 tracking-wider">Menu Principal</h2>}
            <ul className="mt-3">
              <li className="mb-2">
                <Link href="/dashboard" className="flex items-center py-2 px-4 text-blue-100 hover:bg-blue-700 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${sidebarOpen ? 'mr-3' : 'mx-auto'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  {sidebarOpen && <span>Dashboard</span>}
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/dashboard/gift-cards" className="flex items-center py-2 px-4 text-blue-100 hover:bg-blue-700 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${sidebarOpen ? 'mr-3' : 'mx-auto'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  {sidebarOpen && <span>Gift Cards</span>}
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/dashboard/fornecedores" className="flex items-center py-2 px-4 text-blue-100 hover:bg-blue-700 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${sidebarOpen ? 'mr-3' : 'mx-auto'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  {sidebarOpen && <span>Fornecedores</span>}
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/dashboard/transacoes" className="flex items-center py-2 px-4 bg-blue-700 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${sidebarOpen ? 'mr-3' : 'mx-auto'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  {sidebarOpen && <span>Transações</span>}
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/dashboard/relatorios" className="flex items-center py-2 px-4 text-blue-100 hover:bg-blue-700 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${sidebarOpen ? 'mr-3' : 'mx-auto'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  {sidebarOpen && <span>Relatórios</span>}
                </Link>
              </li>
            </ul>
          </div>
          
          {sidebarOpen && <div className="px-4 mb-6">
            <h2 className="text-xs uppercase text-blue-200 tracking-wider">Administração</h2>
            <ul className="mt-3">
              <li className="mb-2">
                <Link href="/dashboard/usuarios" className="flex items-center py-2 px-4 text-blue-100 hover:bg-blue-700 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <span>Usuários</span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/dashboard/configuracoes" className="flex items-center py-2 px-4 text-blue-100 hover:bg-blue-700 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Configurações</span>
                </Link>
              </li>
            </ul>
          </div>}
          
          {!sidebarOpen && <div className="px-4 mb-6">
            <ul className="mt-3">
              <li className="mb-2">
                <Link href="/dashboard/usuarios" className="flex items-center py-2 px-4 text-blue-100 hover:bg-blue-700 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/dashboard/configuracoes" className="flex items-center py-2 px-4 text-blue-100 hover:bg-blue-700 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-white shadow-sm z-10">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center rounded-md bg-gray-100 p-2 w-64">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Buscar transações..."
                className="bg-transparent border-none focus:outline-none text-sm flex-1"
              />
            </div>
            <div className="flex items-center">
              <button className="p-2 rounded-full hover:bg-gray-100 relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute top-1 right-1 bg-red-500 rounded-full w-2 h-2"></span>
              </button>
              <div className="ml-4 relative flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
                  JS
                </div>
                <div className="ml-2 flex items-center cursor-pointer">
                  <span className="text-sm font-medium">João Silva</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Transactions Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Transações</h1>
            <Link href="/dashboard/transacoes/new" className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center hover:bg-blue-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Nova Transação
            </Link>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-lg shadow p-4 mb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
              <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
                <div>
                  <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <select
                    id="status"
                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                  >
                    <option value="all">Todos</option>
                    <option value="concluída">Concluída</option>
                    <option value="pendente">Pendente</option>
                    <option value="cancelada">Cancelada</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="giftCard" className="block text-sm font-medium text-gray-700 mb-1">Gift Card</label>
                  <select
                    id="giftCard"
                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    value={selectedGiftCard}
                    onChange={(e) => setSelectedGiftCard(e.target.value)}
                  >
                    <option value="all">Todos</option>
                    {giftCards.map((giftCard) => (
                      <option key={giftCard} value={giftCard}>{giftCard}</option>
                    ))}
                  </selec<response clipped><NOTE>To save on context only part of this file has been shown to you. You should retry this tool after you have searched inside the file with `grep -n` in order to find the line numbers of what you are looking for.</NOTE>