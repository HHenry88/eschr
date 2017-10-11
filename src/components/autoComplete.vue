<template lang="html">
  <div id="autocomplete-input-template">
    <div class="autocomplete-input" >
      <input v-model="keyword" type="text" ref="autocompleteRef" id="autocompleteTextField" value="text field" placeholder="Search for Image" @input="onInput($event.target.value)" @keyup.esc="isOpen = false" @blur="isOpen = false" @keydown.down="moveDown" @keydown.up="moveUp" @keydown.enter="select">
      <ul v-show="isOpen" class="options-list">
        <li v-for="(option, index) in fOptions" :class="{
            'highlighted': index === highlightedPosition
            }" @mouseenter="highlightedPosition = index" @mousedown="select">
          <div class="autocomplete-option">
            <p class="optionText"><md-icon class="md-size-2x optionIcon">search</md-icon> {{option.name}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { store } from '../store/store'

export default {
  data(){
    return {
      isOpen: true,
      highlightedPosition:0,
      keyword: '',
      options: [
        { "name":"amy elliot" },
        { "name":"bradly host" },
        { "name":"carla ryan" },
        { "name":"corey petty" },
        { "name":"david stobbe" },
        { "name":"jackie chiu" },
        { "name":"jamie wilde" },
        { "name":"joe ryan" },
        { "name":"kyle elliot" },
        { "name":"laura whitesides host" },
        { "name":"lesley whitesides" },
        { "name":"meredith host" },
        { "name":"patrick mcinerney" },
        { "name":"taylor host" },
        { "name":"tom halverson" },
        { "name":"valerie fay" },
        { "name":"aguas calientes" },
        { "name":"angkor wat" },
        { "name":"annie moore statue" },
        { "name":"aquas calientes" },
        { "name":"austria" },
        { "name":"baan dam" },
        { "name":"bagaces" },
        { "name":"barranco" },
        { "name":"barrio de la presa" },
        { "name":"batu caves" },
        { "name":"belgravia" },
        { "name":"bogota old town" },
        { "name":"bogota" },
        { "name":"bogotá" },
        { "name":"botero museum" },
        { "name":"british columbia" },
        { "name":"british virgin islands" },
        { "name":"california" },
        { "name":"cambodia" },
        { "name":"canada" },
        { "name":"caribbean" },
        { "name":"central" },
        { "name":"centro histórico" },
        { "name":"centro" },
        { "name":"chai wan" },
        { "name":"chang wat chiang mai" },
        { "name":"chang wat chiang rai" },
        { "name":"chek lap kok" },
        { "name":"chiang mai" },
        { "name":"chiang rai" },
        { "name":"chinchero" },
        { "name":"chūō-ku" },
        { "name":"clear water bay" },
        { "name":"cliffs of moher" },
        { "name":"cn tower" },
        { "name":"coal harbour" },
        { "name":"cobh" },
        { "name":"coco" },
        { "name":"colombia" },
        { "name":"comunidad de madrid" },
        { "name":"cork" },
        { "name":"costa rica" },
        { "name":"county clare" },
        { "name":"county cork" },
        { "name":"county dublin" },
        { "name":"county galway" },
        { "name":"cusco" },
        { "name":"cuzco" },
        { "name":"cửa nam" },
        { "name":"da nang" },
        { "name":"downtown" },
        { "name":"dragon bridge" },
        { "name":"dubai" },
        { "name":"dublin" },
        { "name":"east end" },
        { "name":"england" },
        { "name":"europe" },
        { "name":"florida" },
        { "name":"fujikawaguchiko-machi" },
        { "name":"fulham" },
        { "name":"galway cathedral" },
        { "name":"galway" },
        { "name":"germania" },
        { "name":"gia ngu restaurant" },
        { "name":"grand haven" },
        { "name":"guanacaste province" },
        { "name":"guanajuato" },
        { "name":"ha long bay" },
        { "name":"hanoi" },
        { "name":"hard rock hotel" },
        { "name":"harrods" },
        { "name":"hawaii" },
        { "name":"hiroshima" },
        { "name":"ho long bay" },
        { "name":"hofburg" },
        { "name":"hoi an old town" },
        { "name":"hoi an" },
        { "name":"hollywood" },
        { "name":"hong kong island" },
        { "name":"hong kong" },
        { "name":"honolulu" },
        { "name":"hà nội" },
        { "name":"hà n���i" },
        { "name":"hàng bài" },
        { "name":"hàng bạc" },
        { "name":"hàng trống" },
        { "name":"hòa cường nam" },
        { "name":"hồng gai" },
        { "name":"icc" },
        { "name":"innere stadt" },
        { "name":"intercontinental da nang" },
        { "name":"ireland" },
        { "name":"japan" },
        { "name":"jardines del buen retiro" },
        { "name":"jost van dyke" },
        { "name":"kalamazoo" },
        { "name":"kanagawa-ken" },
        { "name":"kaohsiung city" },
        { "name":"kaohsiung" },
        { "name":"kawaguchiko" },
        { "name":"kilgarvan" },
        { "name":"kissimmee" },
        { "name":"knightsbridge" },
        { "name":"kuala lumpur" },
        { "name":"la candelaria" },
        { "name":"la catedral" },
        { "name":"la fortuna" },
        { "name":"la paz" },
        { "name":"la petaca" },
        { "name":"laguna de masaya" },
        { "name":"lantau island" },
        { "name":"las angeles" },
        { "name":"las nieves" },
        { "name":"las vegas" },
        { "name":"lima" },
        { "name":"lislorkan north" },
        { "name":"london" },
        { "name":"los angeles" },
        { "name":"machu picchu sanctuary lodge" },
        { "name":"machu picchu" },
        { "name":"madame tussauds hollywood" },
        { "name":"madrid" },
        { "name":"malaysia" },
        { "name":"maras salt mines" },
        { "name":"mexico" },
        { "name":"michigan" },
        { "name":"minh an" },
        { "name":"miraflores" },
        { "name":"miyajima" },
        { "name":"monserrate hill" },
        { "name":"moray" },
        { "name":"mrt formosa boulevard station" },
        { "name":"mt fuji" },
        { "name":"mt. fuji" },
        { "name":"mui wo" },
        { "name":"municipalidad metropolitana de lima" },
        { "name":"my khe beach" },
        { "name":"mỹ an" },
        { "name":"nagoya" },
        { "name":"naniwa-ku" },
        { "name":"nara" },
        { "name":"nara-ken" },
        { "name":"nara-shi" },
        { "name":"natural history museum vienna" },
        { "name":"natural history museum" },
        { "name":"nevada" },
        { "name":"new territories" },
        { "name":"nhật tân" },
        { "name":"niagara falls" },
        { "name":"nicaragua falls" },
        { "name":"nicaragua" },
        { "name":"north dock" },
        { "name":"north point" },
        { "name":"nuevo méxico" },
        { "name":"ocean park" },
        { "name":"ollantaytambo" },
        { "name":"ontario" },
        { "name":"osaka" },
        { "name":"panama city" },
        { "name":"panama" },
        { "name":"panamá" },
        { "name":"parque central de miraflores" },
        { "name":"parroquia virgen milagrosa" },
        { "name":"peru" },
        { "name":"phước mỹ" },
        { "name":"phước ninh" },
        { "name":"plaza de armas del cusco" },
        { "name":"plaza de bolivar" },
        { "name":"plaza mayor" },
        { "name":"provincia de alajuela" },
        { "name":"provincia de guanacaste" },
        { "name":"qosqo" },
        { "name":"quảng nam" },
        { "name":"quảng ninh" },
        { "name":"river corrib" },
        { "name":"rosewood hotel san miguel" },
        { "name":"royal palace madrid" },
        { "name":"sacred valley" },
        { "name":"sai wan ho" },
        { "name":"saint thomas" },
        { "name":"san antonio" },
        { "name":"san carlos" },
        { "name":"san francisco" },
        { "name":"san miguel de allende" },
        { "name":"san miguel" },
        { "name":"sangkat nokor thum" },
        { "name":"sangkat svay dangkum" },
        { "name":"santa fé" },
        { "name":"shau kei wan" },
        { "name":"shinjuku" },
        { "name":"shinsaibashi" },
        { "name":"shisaibashi" },
        { "name":"siem reap province" },
        { "name":"siem reap pub street" },
        { "name":"siem reap" },
        { "name":"skylodge" },
        { "name":"spain" },
        { "name":"st joseph cathedral hanoi" },
        { "name":"st. thomas" },
        { "name":"stamford bridge stadium" },
        { "name":"stephansdom cathedral" },
        { "name":"switzerland " },
        { "name":"switzerland" },
        { "name":"sword lake" },
        { "name":"tainan city" },
        { "name":"tainan" },
        { "name":"taiwan" },
        { "name":"tambon chang khlan" },
        { "name":"tambon nang lae" },
        { "name":"tambon pa o don chai" },
        { "name":"tambon phra sing" },
        { "name":"tambon si phum" },
        { "name":"tambon su thep" },
        { "name":"teatro la plaza" },
        { "name":"teeraghbeg" },
        { "name":"temple bar street" },
        { "name":"temple bar" },
        { "name":"thailand" },
        { "name":"the cathedral church of st colman" },
        { "name":"the university of dublin" },
        { "name":"thọ quang" },
        { "name":"titanic museum cobh" },
        { "name":"tokoname" },
        { "name":"tokyo" },
        { "name":"tsim sha tsui" },
        { "name":"tst" },
        { "name":"tuần châu" },
        { "name":"tōkyō-to" },
        { "name":"u.s. virgin islands" },
        { "name":"uae" },
        { "name":"uk" },
        { "name":"united arab emirates" },
        { "name":"united kingdom" },
        { "name":"united states virgin islands" },
        { "name":"united states" },
        { "name":"urubamba" },
        { "name":"usa" },
        { "name":"vancouver" },
        { "name":"vienna" },
        { "name":"vietnam" },
        { "name":"virgin gorda" },
        { "name":"wat phra singh" },
        { "name":"wat rong khun" },
        { "name":"wien" },
        { "name":"xinxing district" },
        { "name":"yamanashi-ken" },
        { "name":"yau yue wan" },
        { "name":"yokohama" },
        { "name":"zona centro" },
        { "name":"zurich national museum" },
        { "name":"zurich old town" },
        { "name":"zurich" },
        { "name":"đà nẵng" },
        { "name":"ōsaka-fu" },
        { "name":"เทศบาลนครเชียงใหม่" },
        { "name":"平安里" },
        { "name":"平通里" },
        { "name":"明莊里" },
        { "name":"民權里" },
        { "name":"海頭里" },
        { "name":"港仔里" },
        { "name":"華平里" },
        { "name":"sky" },
        { "name":"tree" },
        { "name":"tourism" },
        { "name":"building" },
        { "name":"city" },
        { "name":"cloud" },
        { "name":"tourist attraction" },
        { "name":"mountain" },
        { "name":"water" },
        { "name":"recreation" },
        { "name":"vacation" },
        { "name":"landmark" },
        { "name":"facade" },
        { "name":"plant" },
        { "name":"hill station" },
        { "name":"highland" },
        { "name":"urban area" },
        { "name":"grass" },
        { "name":"house" },
        { "name":"mount scenery" },
        { "name":"town" },
        { "name":"street" },
        { "name":"art" },
        { "name":"fun" },
        { "name":"window" },
        { "name":"historic site" },
        { "name":"road" },
        { "name":"sea" },
        { "name":"architecture" },
        { "name":"ancient history" },
        { "name":"mountainous landforms" },
        { "name":"vehicle" },
        { "name":"rock" },
        { "name":"travel" },
        { "name":"temple" },
        { "name":"metropolitan area" },
        { "name":"hill" },
        { "name":"place of worship" },
        { "name":"river" },
        { "name":"reflection" },
        { "name":"geology" },
        { "name":"food" },
        { "name":"mountain range" },
        { "name":"leisure" },
        { "name":"car" },
        { "name":"waterway" },
        { "name":"landscape" },
        { "name":"girl" },
        { "name":"statue" },
        { "name":"skyline" },
        { "name":"national park" },
        { "name":"daytime" },
        { "name":"structure" },
        { "name":"sculpture" },
        { "name":"dish" },
        { "name":"hat" },
        { "name":"cuisine" },
        { "name":"waterfront" },
        { "name":"boat" },
        { "name":"town square" },
        { "name":"skyscraper" },
        { "name":"rural area" },
        { "name":"medieval architecture" },
        { "name":"body of water" },
        { "name":"wall" },
        { "name":"vegetation" },
        { "name":"church" },
        { "name":"baseball cap" },
        { "name":"archaeological site" },
        { "name":"machu picchu" },
        { "name":"detroit tigers" },
        { "name":"arch" },
        { "name":"religion" },
        { "name":"public space" },
        { "name":"history" },
        { "name":"cathedral" },
        { "name":"palace" },
        { "name":"outcrop" },
        { "name":"ocean" },
        { "name":"night" },
        { "name":"neighbourhood" },
        { "name":"nature" },
        { "name":"basilica" },
        { "name":"tower" },
        { "name":"plaza" },
        { "name":"metropolis" },
        { "name":"coast" },
        { "name":"tower block" },
        { "name":"shore" },
        { "name":"ruins" },
        { "name":"restaurant" },
        { "name":"monument" },
        { "name":"grassland" },
        { "name":"evening" },
        { "name":"wilderness" },
        { "name":"sunset" },
        { "name":"mountains" },
        { "name":"meal" },
        { "name":"geological phenomenon" },
        { "name":"field" },
        { "name":"shrubland" },
        { "name":"roof" },
        { "name":"outdoor structure" },
        { "name":"fauna" },
        { "name":"drink" },
        { "name":"cityscape" },
        { "name":"bank" },
        { "name":"sunglasses" },
        { "name":"smile" },
        { "name":"pasture" },
        { "name":"middle ages" },
        { "name":"horizon" },
        { "name":"cat" },
        { "name":"asian food" },
        { "name":"terrace" },
        { "name":"product" },
        { "name":"photography" },
        { "name":"palm trees" },
        { "name":"nature reserve" },
        { "name":"infrastructure" },
        { "name":"beer" },
        { "name":"water resources" },
        { "name":"village" },
        { "name":"royal palace of madrid" },
        { "name":"romantic" },
        { "name":"pedestrian" },
        { "name":"escarpment" },
        { "name":"château" },
        { "name":"chinese architecture" },
        { "name":"phenomenon" },
        { "name":"mountain village" },
        { "name":"lunch" },
        { "name":"loch" },
        { "name":"lighting" },
        { "name":"lawn" },
        { "name":"lake" },
        { "name":"headgear" },
        { "name":"glasses" },
        { "name":"garden" },
        { "name":"classical architecture" },
        { "name":"beach" },
        { "name":"aerial photography" },
        { "name":"watercourse" },
        { "name":"valley" },
        { "name":"snout" },
        { "name":"shrine" },
        { "name":"ridge" },
        { "name":"promontory" },
        { "name":"painting" },
        { "name":"pagoda" },
        { "name":"morning" },
        { "name":"grasses" },
        { "name":"flooring" },
        { "name":"condominium" },
        { "name":"coastal and oceanic landforms" },
        { "name":"cliff" },
        { "name":"breakfast" },
        { "name":"wood" },
        { "name":"wat" },
        { "name":"unesco world heritage site" },
        { "name":"transport" },
        { "name":"terrain" },
        { "name":"small to medium sized cats" },
        { "name":"residential area" },
        { "name":"plateau" },
        { "name":"museum" },
        { "name":"mural" },
        { "name":"glass" },
        { "name":"floor" },
        { "name":"fjord" },
        { "name":"dusk" },
        { "name":"caves" },
        { "name":"atmosphere" },
        { "name":"arecales" },
        { "name":"yellow" },
        { "name":"vision care" },
        { "name":"sunrise" },
        { "name":"street food" },
        { "name":"road surface" },
        { "name":"reservoir" },
        { "name":"property" },
        { "name":"pier" },
        { "name":"park" },
        { "name":"national trust for places of historic interest or natural beauty" },
        { "name":"mountain pass" },
        { "name":"livestock" },
        { "name":"light" },
        { "name":"leaf" },
        { "name":"lane" },
        { "name":"lake district" },
        { "name":"indian temple" },
        { "name":"grass family" },
        { "name":"estate" },
        { "name":"dog" },
        { "name":"day" },
        { "name":"dawn" },
        { "name":"carving" },
        { "name":"boating" },
        { "name":"bird's-eye view" },
        { "name":"atmosphere of earth" },
        { "name":"alcoholic beverage" },
        { "name":"alcohol" },
        { "name":"agriculture" },
        { "name":"wildlife" },
        { "name":"walkway" },
        { "name":"symmetry" },
        { "name":"soup" },
        { "name":"real estate" },
        { "name":"pond" },
        { "name":"palm tree" },
        { "name":"memorial" },
        { "name":"llama" },
        { "name":"island" },
        { "name":"iron" },
        { "name":"graffiti" },
        { "name":"friends" },
        { "name":"farm" },
        { "name":"column" },
        { "name":"chapel" },
        { "name":"canal" },
        { "name":"bicycle" }
      ]
    }
  },
  computed:{
    ...mapGetters([

    ]),
    fOptions() {
      const re = new RegExp(this.keyword, 'i')
      return this.options.filter(o => o.name.match(re)).slice(0, 10);
    }
  },
  methods: {
    ...mapActions([
      'retrieveMatchedImages'
    ]),
    onInput(value) {
      this.highlightedPosition = 0;
      this.isOpen = !!value;
    },
    moveDown(){
      if( !this.isOpen) {
        return
      }
      this.highlightedPosition =
        (this.highlightedPosition + 1) % this.fOptions.length
    },
    moveUp(){
      if(!this.isOpen) {
        return
      }
      this.highlightedPosition = this.highlightedPosition - 1 < 0 ? this.fOptions.length - 1 : this.highlightedPosition - 1
    },
    select(){
      this.keyword = this.fOptions[this.highlightedPosition].name
      this.isOpen = false
      store.dispatch('retrieveMatchedImages', {result: this.keyword, thumbnail: false });
    }
  }
}
</script>

<style lang="css" scoped>
#autocomplete-input-template {
  width: 100%;
  margin-top: 2%;
}

ul {
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

input {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  width: 95%;
  font-size: 70px;
  border: 1px solid black;
  padding: 2%;
}

.autocomplete-input {
  position: relative;
}

ul.options-list {
  display: flex;
  flex-direction: column;
  margin-top: 0;
  border: 1px solid #dbdbdb;
  border-radius: 0 0 3px 3px;
  position: absolute;
  width: 95%;
  overflow: hidden;
}

ul.options-list li {
  width: 100%;
  flex-wrap: wrap;
  background: white;
  border-bottom: 1px solid #eee;
  color: #363636;
  margin: 0;
  padding: 30px 7px;
  cursor: pointer;
}

ul.options-list li.highlighted {
  background: #f8f8f8
}

.autocomplete-option {
  font-size: 4em;
}

.optionIcon {
  background: #3B51AD;
  border-radius: 50%;
  color: white;
  padding: 5px;
  width: 1.3em;
  height: auto;
  margin: auto;
}

.optionText {
  padding-top: 15px;
}
</style>
