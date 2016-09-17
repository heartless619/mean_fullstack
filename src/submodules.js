/**
 * Created by yangrui on 15.9.2016.
 */
export default (ngModule) => {

    require('./app/services/translateService')(ngModule);
    require('./app/home')(ngModule);
    require('./app/menu')(ngModule);
    require('./app/buffet')(ngModule);
    require('./app/info')(ngModule);
    require('./app/contact')(ngModule);
    require('./app/common/navbar')(ngModule);
    require('./app/common/footer')(ngModule);

}