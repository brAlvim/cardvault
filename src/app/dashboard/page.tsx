'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className={`sidebar ${!sidebarOpen ? 'collapsed' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">CardVault</div>
          <button className="sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        <div className="menu-section">
          <div className="menu-title">Menu Principal</div>
          <ul>
            <li>
              <Link href="/dashboard" className="menu-item active">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 menu-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                {sidebarOpen && <span>Dashboard</span>}
              </Link>
            </li>
            <li>
              <Link href="/dashboard/gift-cards" className="menu-item">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 menu-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                {sidebarOpen && <span>Gift Cards</span>}
              </Link>
            </li>
            <li>
              <Link href="/dashboard/fornecedores" className="menu-item">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 menu-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                {sidebarOpen && <span>Fornecedores</span>}
              </Link>
            </li>
            <li>
              <Link href="/dashboard/transacoes" className="menu-item">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 menu-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                {sidebarOpen && <span>Transações</span>}
              </Link>
            </li>
            <li>
              <Link href="/dashboard/relatorios" className="menu-item">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 menu-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                {sidebarOpen && <span>Relatórios</span>}
              </Link>
            </li>
          </ul>
        </div>
        
        {sidebarOpen && (
          <div className="menu-section">
            <div className="menu-title">Administração</div>
            <ul>
              <li>
                <Link href="/dashboard/usuarios" className="menu-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 menu-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <span>Usuários</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/configuracoes" className="menu-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 menu-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Configurações</span>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className={`main-content ${!sidebarOpen ? 'sidebar-collapsed' : ''}`}>
        {/* Header */}
        <div className="header">
          <h1 className="page-title">Dashboard</h1>
          <div className="header-actions">
            <div className="search-bar">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input type="text" placeholder="Buscar..." className="search-input" />
            </div>
            <div className="user-menu">
              <div className="avatar">JS</div>
              <span className="hidden md:inline">João Silva</span>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="stats-grid">
          <div className="stats-card animate-fade-in">
            <div className="stats-icon blue">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <div className="stats-info">
              <div className="stats-label">Gift Cards</div>
              <div className="stats-value">125</div>
              <div className="stats-trend trend-up">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                <span>5.2% desde o último mês</span>
              </div>
            </div>
          </div>
          
          <div className="stats-card animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="stats-icon green">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div className="stats-info">
              <div className="stats-label">Fornecedores</div>
              <div className="stats-value">18</div>
              <div className="stats-trend trend-up">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                <span>2.1% desde o último mês</span>
              </div>
            </div>
          </div>
          
          <div className="stats-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="stats-icon purple">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div className="stats-info">
              <div className="stats-label">Transações</div>
              <div className="stats-value">342</div>
              <div className="stats-trend trend-up">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                <span>12.5% desde o último mês</span>
              </div>
            </div>
          </div>
          
          <div className="stats-card animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="stats-icon yellow">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="stats-info">
              <div className="stats-label">Saldo Total</div>
              <div className="stats-value">R$ 12.450</div>
              <div className="stats-trend trend-down">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                <span>3.2% desde o último mês</span>
              </div>
            </div>
          </div>
        </div>

        {/* Charts and Tables Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Gift Cards por Fornecedor */}
          <div className="card animate-slide-in">
            <div className="card-header">
              <h2 className="card-title">Gráfico de Gift Cards por Fornecedor</h2>
            </div>
            <div className="card-body" style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className="text-center text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <p>Distribuição de Gift Cards por Fornecedor</p>
              </div>
            </div>
          </div>

          {/* Gift Cards Próximos do Vencimento */}
          <div className="card animate-slide-in" style={{ animationDelay: '0.1s' }}>
            <div className="card-header">
              <h2 className="card-title">Gift Cards Próximos do Vencimento</h2>
              <a href="#" className="text-sm text-blue-600 hover:underline">Ver Todos</a>
            </div>
            <div className="card-body">
              <div className="table-container">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Código</th>
                      <th>Fornecedor</th>
                      <th>Valor</th>
                      <th>Vencimento</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>GC005</td>
                      <td>Uber</td>
                      <td>R$ 30,00</td>
                      <td>
                        <span className="status-badge status-pending">5 dias</span>
                      </td>
                    </tr>
                    <tr>
                      <td>GC008</td>
                      <td>Amazon</td>
                      <td>R$ 75,00</td>
                      <td>
                        <span className="status-badge status-pending">15 dias</span>
                      </td>
                    </tr>
                    <tr>
                      <td>GC007</td>
                      <td>Netflix</td>
                      <td>R$ 50,00</td>
                      <td>
                        <span className="status-badge status-pending">30 dias</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Atividades Recentes */}
          <div className="card animate-slide-in" style={{ animationDelay: '0.2s' }}>
            <div className="card-header">
              <h2 className="card-title">Atividades Recentes</h2>
              <a href="#" className="text-sm text-blue-600 hover:underline">Ver Todas</a>
            </div>
            <div className="card-body">
              <div className="activity-feed">
                <div className="activity-item">
                  <div className="activity-avatar">MC</div>
                  <div className="activity-content">
                    <div className="activity-title">Maria Costa</div>
                    <div className="activity-description">Registrou uma transação de R$ 10,00 no gift card Amazon (GC001)</div>
                    <div className="activity-time">Hoje às 14:30</div>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-avatar">JS</div>
                  <div className="activity-content">
                    <div className="activity-title">João Silva</div>
                    <div className="activity-description">Adicionou um novo gift card Netflix (GC006)</div>
                    <div className="activity-time">Ontem às 16:45</div>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-avatar">CG</div>
                  <div className="activity-content">
                    <div className="activity-title">Carlos Gomes</div>
                    <div className="activity-description">Atualizou as informações do fornecedor Spotify</div>
                    <div className="activity-time">10/03/2025 às 09:20</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gift Cards Recentes */}
          <div className="card animate-slide-in" style={{ animationDelay: '0.3s' }}>
            <div className="card-header">
              <h2 className="card-title">Gift Cards Recentes</h2>
              <a href="#" className="text-sm text-blue-600 hover:underline">Ver Todos</a>
            </div>
            <div className="card-body">
              <div className="table-container">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Código</th>
                      <th>Fornecedor</th>
                      <th>Valor</th>
                      <th>Data</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>GC001</td>
                      <td>Amazon</td>
                      <td>R$ 100,00</td>
                      <td>12/03/2025</td>
                      <td>
                        <span className="status-badge status-active">Completo</span>
                      </td>
                    </tr>
                    <tr>
                      <td>GC002</td>
                      <td>Netflix</td>
                      <td>R$ 50,00</td>
                      <td>11/03/2025</td>
                      <td>
                        <span className="status-badge status-active">Completo</span>
                      </td>
                    </tr>
                    <tr>
                      <td>GC003</td>
                      <td>Spotify</td>
                      <td>R$ 25,00</td>
                      <td>10/03/2025</td>
                      <td>
                        <span className="status-badge status-pending">Pendente</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
