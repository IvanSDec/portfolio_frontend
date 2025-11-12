import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

/**
 * ═══════════════════════════════════════════════════════════════════════
 * 🎨 NOT FOUND COMPONENT - PÁGINA NO ENCONTRADA 🎨
 * ═══════════════════════════════════════════════════════════════════════
 * 
 * 🔒 FUNCIONALIDAD:
 *    • Mostrar un mensaje de error 404
 *    • Opción para volver a la página de inicio
 * 
 * 👨‍💻 Autor: Iván Sánchez
 * ═══════════════════════════════════════════════════════════════════════
*/ 
export default function NotFound() {
    const navigate = useNavigate();
    const [score, setScore] = useState(0);

    useEffect(() => {
        const scoreInterval = setInterval(() => {
            setScore(prev => prev + 100);
        }, 100);

        return () => clearInterval(scoreInterval);
    }, []);

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black flex items-center justify-center p-4 overflow-hidden relative">
           
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500 rounded-full filter blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="relative z-10 max-w-2xl w-full">
                <div className="relative bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-gray-900/90 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl overflow-hidden">

                    <div className="flex justify-between items-center p-6 border-b border-slate-700/50 bg-black/20">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
                        </div>
                        <div className="text-cyan-400/60 font-mono text-xs uppercase tracking-wider">
                            Game Portal
                        </div>
                    </div>

                    <div className="relative p-8 md:p-12">
                        
                        <div className="absolute top-4 right-4 text-slate-600 font-mono text-xs">
                            {score.toString().padStart(6, '0')}
                        </div>

                        <div className="flex flex-col items-center justify-center h-full p-4">
                          
                            <div className="relative mb-8">
                                <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 animate-pulse select-none">
                                    404
                                </h1>
                            </div>

                            <div className="bg-black/70 border-4 border-purple-400 rounded-lg p-6 mb-8 max-w-md">
                                <p className="text-purple-400 text-2xl font-bold text-center uppercase tracking-wider mb-2">
                                    GAME OVER
                                </p>
                                <p className="text-cyan-300 text-center font-mono">
                                    ¡Página no encontrada!
                                </p>
                                <p className="text-gray-400 text-sm text-center mt-2 font-mono">
                                    La página que buscas está en otro castillo 🏰
                                </p>
                            </div>

                            <button
                                onClick={handleGoHome}
                                className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white py-3 rounded-lg font-mono text-sm uppercase tracking-wider transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30"
                            >
                                Volver al inicio
                            </button>
                        </div>
                    </div>

                    <div className="p-4 border-t border-slate-700/50 bg-black/20">
                        <p className="text-slate-500 font-mono text-xs text-center">
                            ERROR CODE: <span className="text-red-400">PAGE_NOT_FOUND</span>
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}