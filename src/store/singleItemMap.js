function ParseDMS(input) {
    var parts = input.split(/[^\d\w]+/);
    var lat = ConvertDMSToDD(parts[0], parts[1], parts[2]);
    var lng = ConvertDMSToDD(parts[4], parts[5], parts[6]);
}

function ConvertDMSToDD(degrees, minutes, seconds, direction) {
    var dd = degrees + minutes/60 + seconds/(60*60);

    if (direction == "S" || direction == "W") {
        dd = dd * -1;
    } // Don't do anything for N or E
    return dd;
}

const singleItemMap = {
    state:{
      longitude: null,
      latitude: null
    },
    getters:{
      getLongitude: state => state.longitude,
      getLatitude: state => state.latitude
    },
    mutations: {
      setCoordinates: (state, payload) => {
        state.latitude = ConvertDMSToDD(payload.GPSLatitude[0], payload.GPSLatitude[1], payload.GPSLatitude[2], payload.GPSLatitudeRef);
        state.longitude = ConvertDMSToDD(payload.GPSLongitude[0], payload.GPSLongitude[1], payload.GPSLongitude[2], payload.GPSLongitudeRef);
      }
    },
    actions: {
      retrieveCoordinates: (context, payload) => {
        context.commit('setCoordinates', payload._source.exif.gps);
      }
    }
}

export default singleItemMap
