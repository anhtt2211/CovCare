import { Tooltip } from 'antd';
import markerIcon from 'assets/images/marker.png';
import SalesLocationDetails from 'components/SalesLocatiionDetails';
import React, { useState } from 'react';
import MapboxGL, {
  FullscreenControl,
  GeolocateControl,
  Marker,
  NavigationControl,
  ScaleControl,
} from 'react-map-gl';

import bdm_1 from 'assets/images/bdm_1.jpg';
import bdm_2 from 'assets/images/bdm_2.jpg';
import bdm_3 from 'assets/images/bdm_3.jpg';
import bdm_4 from 'assets/images/bdm_4.jpg';
import cq_1 from 'assets/images/cq_1.jpg';
import cq_2 from 'assets/images/cq_2.jpg';
import cq_3 from 'assets/images/cq_3.jpg';
import cq_4 from 'assets/images/cq_4.jpg';
import cq_5 from 'assets/images/cq_5.jpg';
import nq_1 from 'assets/images/nq_1.jpg';
import nq_2 from 'assets/images/nq_2.jpg';
import nq_3 from 'assets/images/nq_3.jpg';
import bn_1 from 'assets/images/bn_1.jpg';
import bn_2 from 'assets/images/bn_1.jpg';
import kd_1 from 'assets/images/kd_1.jpg';
import kd_2 from 'assets/images/kd_2.jpg';
import kll_1 from 'assets/images/kll_1.jpg';
import kll_2 from 'assets/images/kll_2.jpg';
import lc_1 from 'assets/images/lc_1.jpg';
import lc_2 from 'assets/images/lc_2.jpg';
import lc_3 from 'assets/images/lc_3.jpg';
import lch_1 from 'assets/images/lch_1.jpg';
import lch_2 from 'assets/images/lch_2.jpg';
import lch_3 from 'assets/images/lch_3.jpg';
import mc_1 from 'assets/images/mc_1.jpg';
import mc_2 from 'assets/images/mc_2.jpg';
import mc_3 from 'assets/images/mc_3.jpg';
import mc_4 from 'assets/images/mc_4.jpg';
import qc_1 from 'assets/images/qc_1.jpg';
import qc_2 from 'assets/images/qc_2.jpg';
import tc_1 from 'assets/images/tc_1.jpg';
import tc_2 from 'assets/images/tc_2.jpg';
import tc_3 from 'assets/images/tc_3.jpg';
import tc_4 from 'assets/images/tc_4.jpg';
import tc_5 from 'assets/images/tc_5.jpg';

const SalesLocation = () => {
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 10.870388200053421,
    longitude: 106.80287170707318,
    zoom: 16,
  });
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [visible, setVisible] = useState(true);

  const geolocateStyle = {
    top: 0,
    left: 0,
    padding: '10px',
  };

  const fullscreenControlStyle = {
    top: 36,
    left: 0,
    padding: '10px',
  };

  const navStyle = {
    top: 72,
    left: 0,
    padding: '10px',
  };

  const scaleControlStyle = {
    bottom: 36,
    left: 0,
    padding: '10px',
  };

  const location = [
    {
      x: 10.870255258755707,
      y: 106.8017498600316,
      title: 'Tr??i c??y H???o T??m',
      open: '6AM - 11PM',
      images: [tc_1, tc_2, tc_3, tc_4, tc_5],
      phone: '0324123567',
      address:
        '???????ng H??n Thuy??n, Ph?????ng Linh Trung, Th??? ?????c, Th??nh ph??? H??? Ch?? Minh, Vi???t Nam (g???n tr?????ng ?????i h???c C??ng Ngh??? Th??ng Tin)',
    },
    {
      x: 10.874470240094974,
      y: 106.80647945941152,
      title: 'Qu??n C?? T?? - Ch??o - B??n - G???i G??,V???t',
      images: [qc_1, qc_2],
      open: '6AM - 11PM',
      phone: '0324123567',
      address: '47 Xa l??? H?? N???i, Ph?????ng Linh Trung, Th??? ?????c, Th??nh ph??? H??? Ch?? Minh, Vi???t Nam',
    },
    {
      x: 10.876882158501108,
      y: 106.80468991397328,
      title: 'L???u c?? 44',
      images: [lc_1, lc_2, lc_3],
      open: '4PM - 10PM',
      phone: '0324123567',
      address: '????ng Ho??, D?? An, B??nh D????ng, Vi???t Nam (g???n KTX khu A)',
    },
    {
      x: 10.876818941939943,
      y: 106.80495813488454,
      title: 'B??nh khoai m???, khoai lang l???c ph?? mai',
      images: [kll_1, kll_2],
      open: '1PM - 8PM',
      phone: '0324123567',
      address: '????ng Ho??, D?? An, B??nh D????ng, Vi???t Nam(g???n KTX khu A)',
    },
    {
      x: 10.87718954862758,
      y: 106.8039527173242,
      title: 'Kem d???a Th??i Lan ',
      images: [kd_1, kd_2],
      open: '9AM - 10:30PM',
      phone: '0324123567',
      address: '????ng Ho??, D?? An, B??nh D????ng, Vi???t Nam',
    },
    {
      x: 10.877761920844152,
      y: 106.80450215934277,
      title: 'L???U CHAY H???NG THI???N - CN2',
      images: [lch_2, lch_1, lch_3],
      phone: '0324123567',
      open: '9AM - 10PM',
      address: 'C???ng chui KTX khu A, T??n L???p, ????ng Ho??, D?? An, B??nh D????ng, Vietnam',
    },
    {
      x: 10.875235347805077,
      y: 106.7991080280936,
      title: 'M?? Cay Sasin - 7 c???p ?????',
      images: [mc_1, mc_2, mc_3, mc_4],
      phone: '0819000131',
      open: '10AM - 9:45PM',
      address: '??. V??o ?????i H???c Qu???c Gia, ????ng Ho??, Th??? ?????c, Th??nh ph??? H??? Ch?? Minh, Vi???t Nam',
    },
    {
      x: 10.874175677010419,
      y: 106.79846643780479,
      title: 'Qu??n C??m T???m Ng?? Quy???n 3',
      images: [nq_1, nq_2, nq_3],
      phone: '0819000131',
      open: '8AM - 9PM',
      address: '35/10 ???????ng T1, ????ng Ho??, D?? An, B??nh D????ng, Vi???t Nam',
    },
    {
      x: 10.87319580997429,
      y: 106.79787635183573,
      title: 'B?? n?? Chu Pin',
      images: [bn_1, bn_2],
      phone: '0819000131',
      open: '8AM - 9PM',
      address: '???????ng T1, ????ng Ho??, D?? An, B??nh D????ng, Vi???t Nam',
    },
    {
      x: 10.873691678647903,
      y: 106.79984702135542,
      title: 'Ch??? Qu??',
      images: [cq_1, cq_2, cq_3, cq_4, cq_5],
      phone: '0902599411',
      open: '24 hours',
      address: '??. Qu???ng Tr?????ng S??ng T???o, ????ng Ho??, Th??? ?????c, B??nh D????ng, Vietnam',
    },
    {
      x: 10.874746611026445,
      y: 106.79937542241571,
      title: 'B??n ?????u M???t',
      images: [bdm_1, bdm_2, bdm_3, bdm_4],
      phone: '0902599411',
      open: '3PM - 10PM',
      address: '????ng Ho??, D?? An, B??nh D????ng, Vietnam',
    },
  ];

  return (
    <MapboxGL
      {...viewport}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxApiAccessToken={process.env.REACT_APP_MAP_BOX_TOKEN}
      onViewportChange={viewport => setViewport(viewport)}>
      {location.map(element => (
        <>
          <Marker
            latitude={element.x}
            longitude={element.y}
            offsetLeft={-20}
            offsetTop={-30}
            onClick={() => {
              setSelectedMarker(element);
              setVisible(true);
            }}>
            <Tooltip title={element.title} placement="topLeft">
              <img src={markerIcon} alt="Abc" style={{ height: 40, width: 40 }} />
            </Tooltip>
          </Marker>
        </>
      ))}
      {selectedMarker && (
        <SalesLocationDetails location={selectedMarker} visible={visible} setVisible={setVisible} />
      )}
      <GeolocateControl style={geolocateStyle} />
      <FullscreenControl style={fullscreenControlStyle} />
      <NavigationControl style={navStyle} />
      <ScaleControl style={scaleControlStyle} />
    </MapboxGL>
  );
};

export default SalesLocation;
