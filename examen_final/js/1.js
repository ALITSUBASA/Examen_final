<script>
     function validarFormulario(event) {
        
                         event.preventDefault();

        
                        const errorBox = document.getElementById('mensajeError');
                        const exitoBox = document.getElementById('mensajeExito');

            
            errorBox.style.display = 'none';
            exitoBox.style.display = 'none';

            
            let todoLleno = true;

            
            const nombre = document.getElementById('nombreUsuario').value.trim();
            const danza = document.getElementById('danzaFavorita').value;
            const opinion = document.getElementById('opinion').value.trim();

            if (nombre === "" || danza === "" || opinion === "") {
                todoLleno = false;
            }

            
            if (todoLleno) {
                const radioFestividad = document.querySelector('input[name="festividad"]:checked');
                const radioPersonaje = document.querySelector('input[name="personaje"]:checked');

            
                if (!radioFestividad || !radioPersonaje) {
                    todoLleno = false;
                }
            }

            
            if (!todoLleno) {
                
                errorBox.style.display = 'block';
                window.scrollTo({ top: 0, behavior: 'smooth' }); 
            } else {
                
                exitoBox.style.display = 'block';
                errorBox.style.display = 'none';
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    </script>