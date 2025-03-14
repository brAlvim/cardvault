import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-blue-600">CardVault</h1>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-700 hover:text-blue-600">Funcionalidades</a>
          <a href="#how-it-works" className="text-gray-700 hover:text-blue-600">Como Funciona</a>
          <a href="#pricing" className="text-gray-700 hover:text-blue-600">Preços</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600">Contato</a>
        </div>
        <div className="flex space-x-4">
          <Link href="/login" className="px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-50">
            Entrar
          </Link>
          <Link href="/register" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Registrar
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Gerencie seus Gift Cards com eficiência e segurança</h1>
            <p className="text-xl mb-8">
              CardVault oferece uma plataforma robusta para o gerenciamento de gift cards, permitindo que empresas e indivíduos acompanhem a utilização e disponibilidade de seus cartões de maneira organizada e intuitiva.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/register" className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-md hover:bg-gray-100 text-center">
                Começar Agora
              </Link>
              <Link href="#demo" className="px-6 py-3 border border-white text-white font-semibold rounded-md hover:bg-blue-600 text-center">
                Ver Demo
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-6">
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h3 className="text-blue-800 font-semibold text-lg mb-2">Dashboard</h3>
                <div className="bg-white p-3 rounded border border-gray-200">
                  <div className="flex justify-between mb-4">
                    <div className="bg-blue-100 p-2 rounded w-1/3 mr-2">
                      <p className="text-xs text-blue-800">Gift Cards</p>
                      <p className="text-lg font-bold text-blue-800">125</p>
                    </div>
                    <div className="bg-green-100 p-2 rounded w-1/3 mr-2">
                      <p className="text-xs text-green-800">Fornecedores</p>
                      <p className="text-lg font-bold text-green-800">18</p>
                    </div>
                    <div className="bg-purple-100 p-2 rounded w-1/3">
                      <p className="text-xs text-purple-800">Transações</p>
                      <p className="text-lg font-bold text-purple-800">342</p>
                    </div>
                  </div>
                  <div className="h-24 bg-gray-100 rounded mb-4"></div>
                  <div className="flex justify-between">
                    <div className="bg-gray-100 p-2 rounded w-1/2 mr-2 h-16"></div>
                    <div className="bg-gray-100 p-2 rounded w-1/2 h-16"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Funcionalidades Principais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Painel de Controle Unificado</h3>
              <p className="text-gray-600">
                Visualize todos os seus gift cards em um único lugar, com métricas e indicadores para rápida compreensão.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Gerenciamento de Fornecedores</h3>
              <p className="text-gray-600">
                Organize gift cards por fornecedor, com filtros avançados e exportação de dados para controle externo.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Controle de Gift Cards</h3>
              <p className="text-gray-600">
                Cadastre gift cards com informações detalhadas e acompanhe o saldo e histórico de transações.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Operações com Gift Cards</h3>
              <p className="text-gray-600">
                Registre transações com atualização automática de saldo e rastreamento completo de usuários.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Segurança e Controle de Acesso</h3>
              <p className="text-gray-600">
                Sistema de permissões granular, autenticação de dois fatores e log detalhado de todas as ações.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Relatórios e Análises</h3>
              <p className="text-gray-600">
                Gere relatórios customizados sobre o uso dos gift cards e exporte em múltiplos formatos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Como Funciona</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Cadastre seus Gift Cards</h3>
              <p className="text-gray-600">
                Adicione informações detalhadas sobre seus gift cards, incluindo fornecedor, valor inicial e código.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">2</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Registre Transações</h3>
              <p className="text-gray-600">
                Registre cada uso do gift card, com atualização automática do saldo e histórico completo.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Monitore e Analise</h3>
              <p className="text-gray-600">
                Acompanhe o uso dos gift cards, gere relatórios e obtenha insights sobre a utilização.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Planos e Preços</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 border-b">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Básico</h3>
                <p className="text-gray-600 mb-4">Ideal para uso pessoal</p>
                <div className="flex items-end">
                  <span className="text-4xl font-bold text-gray-800">R$49</span>
                  <span className="text-gray-600 ml-1">/mês</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Até 50 gift cards</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">5 fornecedores</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Relatórios básicos</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">1 usuário</span>
                  </li>
                </ul>
                <button className="w-full mt-6 py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Escolher Plano
                </button>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-blue-600 transform scale-105">
              <div className="bg-blue-600 text-white text-center py-2">
                <span className="text-sm font-semibold">MAIS POPULAR</span>
              </div>
              <div className="p-6 border-b">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Profissional</h3>
                <p className="text-gray-600 mb-4">Ideal para pequenas empresas</p>
                <div className="flex items-end">
                  <span className="text-4xl font-bold text-gray-800">R$99</span>
                  <span className="text-gray-600 ml-1">/mês</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Até 200 gift cards</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"<response clipped><NOTE>To save on context only part of this file has been shown to you. You should retry this tool after you have searched inside the file with `grep -n` in order to find the line numbers of what you are looking for.</NOTE>