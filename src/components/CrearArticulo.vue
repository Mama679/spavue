<template>
     <v-container>
        <v-row class="text-center">    
            <v-col class="mb-4">
                <h1 class="display-2 font-weight-bold mb-3">Insertar Articulos</h1>       
            </v-col>     
        </v-row>
        <v-row>
            <v-col>
                <form v-on:submit.prevent="guardarArticulo()">
                    <v-text-field v-model="articulo.descripcion"
                            label="Descripción"
                            outlined
                            required   
                    >
                    </v-text-field>
                    <v-text-field
                        v-model="articulo.precio"        
                        label="Precio"
                        type="number"                
                        prefix="$"
                        outlined
                        required        
                    >
                    </v-text-field>
                    <v-text-field
                        v-model="articulo.stock"        
                        label="Stock"
                        type="number"
                        outlined
                        required        
                    >
                    </v-text-field>
                    <v-card-actions>
                        <v-btn color="warning" class="mr-4" type="submit">Guardar</v-btn>      
                    </v-card-actions>
                </form>
            </v-col>
        </v-row>
     </v-container>
</template>

<script>
export default {
    name:'crearArticulo'
}
</script>