<template>
  <v-container>
    <v-row class="text-center">    
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Editar Articulo</h1>       
      </v-col>     
    </v-row>
    <v-row>
        <v-col>         
            <form v-on:submit.prevent="guardarArticulo()">
            <v-text-field
                v-model="articulo.title"        
                label="Descripción"        
                outlined
                required       
            ></v-text-field>
            <v-text-field
                v-model="articulo.price"        
                label="Precio"
                type="number"                
                prefix="$"
                outlined
                required        
            ></v-text-field>
            <v-text-field
                v-model="articulo.stock"        
                label="Stock"
                type="number"
                outlined
                required        
            ></v-text-field>
            <v-card-actions>
            <v-btn color="warning" class="mr-4" type="submit">Guardar</v-btn>      
            </v-card-actions>
            </form>         
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
    name:'editarArticulo',
    mounted(){
      this.id = this.$route.params.id;
      axios.get('https://dummyjson.com/products/'+this.id)
            .then((res) => {
                    console.log(res.data);
                    this.articulo = res.data;
                })
                .catch(function(error){
                    console.log(error);
                });
            
    },
    data(){
      return{
        id:null,
        articulo:{
          title:'',
          price:'',
          stock:''
        }
      }
    },
    methods:{
      async guardarArticulo(){
        let router = this.$router;
        const formData = new FormData();
        formData.append('title',this.articulo.title);
        formData.append('price',this.articulo.price);
        formData.append('stock',this.articulo.stock);
        await axios.put('https://dummyjson.com/products/'+this.id,formData)
        .then((res) => {
              console.log(res.data);
              router.push('/articulos');
                  
        })
                .catch(function(error){
                    console.log(error);
        });
      }
    }

}
</script>