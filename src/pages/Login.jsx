/**
 * @component Login
 * @description Componente de página de inicio de sesión para el panel de administración.
 * Presenta un diseño dividido con información de acceso y formulario de login.
 * Incluye efectos visuales, animaciones en los inputs y un diseño responsivo.
 * 
 * @author Iván Sánchez
 * @returns {JSX.Element} Página de inicio de sesión con formulario y credenciales de acceso
 */
export default function Login() {
	return (
		/**
		 * @section Contenedor Principal
		 * @description Contenedor principal de la página de login
		 * - w-full h-[100vh]: Ancho completo y altura del viewport
		 * - bg-gray-400: Fondo gris
		 * - flex: Layout en flexbox para centrado
		 */
		<div className="w-full h-[100vh] bg-gray-400 flex justify-center items-center">
			{/* 
			 * @section Tarjeta de Login
			 * @description Contenedor principal del formulario
			 * - w-[80%] h-[80%]: Dimensiones responsivas
			 * - rounded-xl: Bordes redondeados
			 * - shadow-2xl: Sombra pronunciada
			 * - overflow-hidden: Oculta contenido que exceda los límites
			 */}
			<div className="w-[80%] h-[80%] rounded-xl flex justify-center items-center overflow-hidden shadow-2xl">
				{/* 
				 * @section Información de Acceso
				 * @description Panel izquierdo con información y credenciales de acceso
				 * - w-[40%]: Ancho del 40% del contenedor
				 * - bg-gray-200: Fondo gris claro
				 * - gap-20: Espaciado entre elementos
				 */}
				<div className="w-[40%] h-full bg-gray-200 flex justify-center items-center flex-col gap-20">
					<div className="w-full p-[50px] text-center">
						<p className="text-black text-md">Página diseñada para la administración del sitio web de <spam className='font-bold'>Iván Sánchez</spam>, con la finalidad de mostrar todos los proyectos y participaciones realizadas en el ámbito profesional.</p>

						<p className="text-black text-md mt-10">Para ver la estructura del administrador sin ningun permiso para modificar la información mostrada en la web se puede entrar con las siguientes credenciales de acceso:</p>
						<p className="text-black text-md mt-10">User: <spam className='font-bold'>Admin</spam></p>
						<p className="text-black text-md mt-1">Password: <spam className='font-bold'>Admin@dec98</spam></p>
					</div>
				</div>

				{/* 
				 * @section Formulario de Login
				 * @description Panel derecho con imagen de fondo y formulario
				 * - w-[60%]: Ancho del 60% del contenedor
				 * - relative: Para posicionamiento de capas
				 */}
				<div className="w-[60%] h-full flex justify-center items-center flex-col relative">
					{/* 
					 * @section Imagen de Fondo
					 * @description Capa con imagen de fondo
					 * - absolute: Posicionamiento absoluto
					 * - z-index: 1 para estar detrás del formulario
					 */}
					<div
						className="absolute w-full h-full bg-black flex justify-center items-center opacity-[1]"
						style={{ zIndex: '1' }}
					>
						<img
							src="https://wallpapers.com/images/high/dark-mountain-1920-x-1080-wallpaper-yndum713ekbn1v7d.webp"
							alt="Fondo de montañas oscuras"
							style={{
								width: '100%',
								height: '100%',
								objectFit: 'cover',
							}}
						/>
					</div>

					{/* 
					 * @section Formulario
					 * @description Capa con el formulario de login
					 * - z-index: 2 para estar sobre la imagen
					 * - backdrop-filter: Efecto de desenfoque
					 * - Contiene inputs con animaciones y efectos hover
					 */}
					<div
						className="absolute w-full h-full flex justify-center items-center flex-col"
						style={{
							zIndex: '2',
							backgroundColor: 'rgba(255, 255, 255, 0.2)',
							backdropFilter: 'blur(7px)',
							WebkitBackdropFilter: 'blur(7px)',
						}}
					>
						<h1 className="text-[45px] font-light text-black uppercase mb-[80px]">welcome</h1>

						{/* 
						 * @section Input de Usuario
						 * @description Campo de entrada para el usuario
						 * - Animación en focus/blur
						 * - Estilo minimalista con borde inferior
						 * - Transición suave en interacciones
						 */}
						<p className="text-black text-[20px]">User</p>
						<input
							style={{
								width: '100%',
								maxWidth: '200px',
								marginBottom: '20px',
								marginTop: '10px',
								outline: 'none',
								borderBottom: '1px solid black',
								transition: 'all 600ms',
								color: 'black',
								fontSize: '14px',
								textAlign: 'center'
							}}
							onFocus={(e) => {
								e.target.style.borderBottom = '2.5px solid gray';
								e.target.style.maxWidth = '225px';
							}}
							onBlur={(e) => {
								e.target.style.borderBottom = '1px solid black';
								e.target.style.maxWidth = '200px';
							}}
							type="text"
						/>

						{/* 
						 * @section Input de Contraseña
						 * @description Campo de entrada para la contraseña
						 * - Mismo estilo y animaciones que el input de usuario
						 * - Tipo password para ocultar caracteres
						 */}
						<p className="text-black text-[20px]">Password</p>
						<input
							style={{
								width: '100%',
								maxWidth: '200px',
								marginBottom: '20px',
								marginTop: '10px',
								outline: 'none',
								borderBottom: '1px solid black',
								transition: 'all 600ms',
								paddingLeft: '10px',
								color: 'black',
								fontSize: '14px',
								textAlign: 'center'
							}}
							onFocus={(e) => {
								e.target.style.borderBottom = '2.5px solid gray';
								e.target.style.maxWidth = '225px';
							}}
							onBlur={(e) => {
								e.target.style.borderBottom = '1px solid black';
								e.target.style.maxWidth = '200px';
							}}
							type="password"
						/>

						{/* 
						 * @section Botón de Login
						 * @description Botón de inicio de sesión
						 * - Estilo minimalista con borde blanco
						 * - Fondo negro con texto blanco
						 * - Bordes redondeados
						 */}
						<button
							className="uppercase text-white mt-[40px] bg-black py-[7px] px-[30px] rounded-[50px]"
							style={{
								border: '1px solid white'
							}}
						>
							Login
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

