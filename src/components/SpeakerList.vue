<template>
   <md-layout md-gutter>
       <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50"  md-flex-large="33"  md-flex-xlarge="33"v-for="(speaker, index) in speakers"  :key='index'>
     <md-card >    

                <md-card-header>
                    <h3>{{speaker.name}}</h3>
                </md-card-header>
                 <md-card-content>
                    
                        <div>
                          {{speaker.twitter}}
                        </div>
                        <div v-if="speaker.website">
                            <a v-bind:href="speaker.website" target="_blank">
                                {{speaker.website}}
                            </a>
                        </div>
                        <div >
                             Topics:
                             <ul>
                                <li v-for="(topic, tIdx) in speaker.topics"  :key='tIdx'>
                                    {{topic}}
                                </li>
                             </ul>
                        </div>
                        <div v-if="speaker.location">
                           Location: {{speaker.location}}
                        </div>
                        <div >
                             Languages:
                             <ul>
                                <li v-for="(language, lIdx) in speaker.languages"  :key='lIdx'>
                                    {{language}}
                                </li>
                             </ul>
                        </div>
                      
                 </md-card-content>
     </md-card>
       </md-layout>
   </md-layout>
</template>

<script>
export default {
  props: ['speakers'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .md-theme-default.md-card {
    margin: 10px;
    width: 90%;
}
.md-card-header{
    background-color: #dedede;
    padding: 0px 16px;
}
</style>
