<template>
  <div class="upload">
    <div>
      <h2>Upload image to firebase</h2>
      <div class="image-upload">
        <label for="file-input" style="width:230px;text-align:center">Select file <br>
        <span>
          <i class="fas fa-upload"></i>
        </span>
        </label>
        <input id="file-input" type="file" accept="image/" @change="previewImage" />
      </div>
    </div>
    <div>
      <p>Progress: {{uploadValue+"%"}}
        <progress :value="uploadValue" max="100"></progress>
      </p>
    </div>
    <div>
      <img :src="picture" alt="" style="width:230px;height:200px;"><br>
      <button @click="onUpload()">Upload</button>
    </div>
      
  </div>
</template>


<script>
// @ is an alias to /src
import  firebase from 'firebase';
export default {
  name: 'upload',
  data() {
    return {
      imgData:'',
      picture:'',
      uploadValue:''
    }
  },
  methods:{
    previewImage(event){
      this.uploadValue=0;
      this.picture=null;
      this.imgData=event.target.files[0];
    },
    onUpload(){
      this.picture=null;
      const storageRef=firebase.storage().ref(`${this.imgData.name}`).put(this.imgData);
      storageRef.on(`state_changed`, snapshot =>{
      this.uploadValue=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
    }, error=>{
      console.log(error.message)
    },
    ()=>{
      this.uploadValue=100;
      storageRef.snapshot.ref.getDownloadURL().then((url)=>{
        this.picture=url
      })
    }
    )
   }
  }
}
</script>

<style>
input{
  display: none;
  width: 200px;
  height: 60px;
}

.image-upload{
  width: 230px;
  height: 60px;
  text-align: center;
  margin: 0 auto;
  background-color: #34eb92;
}
button{
  background-color: #409EFF;
  width: 110px;
  height: 35px;
  color: white;
  border: none;
  outline: none;
  font-size: 16px;
  border-radius: 10px;
  box-shadow: 3px 6px rgba(240, 240, 240, 240);
}

</style>
