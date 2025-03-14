'use client';

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
          </div>
        </div>
      </section>
    </main>
  );
}
