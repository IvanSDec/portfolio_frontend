/**
 * @component Trial.jsx
 * @description Página visible solo para usuarios con rol 2.
 * @author Iván Sánchez
*/
const Trial = () => (
  <div className="text-center mt-20">
    <h1 className="text-3xl font-bold text-blue-600">Bienvenido al modo Trial</h1>
    <p className="text-gray-700 mt-2">Esta sección es exclusiva para usuarios con rol 2.</p>
  </div>
);

export default Trial;