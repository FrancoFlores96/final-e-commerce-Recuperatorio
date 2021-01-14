module.exports = (sequelize, DataTypes) => {

    let cols = {
        id : {
            type:DataTypes.INTEGER(11),
            allowNull:false,
            autoIncrement: true,
            primaryKey:true
        },
        nombre:{
            type:DataTypes.STRING(45),
            allowNull:false
        }
       
    };

    let config = {
        tableName : "categorias",
        timestamps: false,
        underscored: false
    };

    const Categoria = sequelize.define("Categoria", cols, config);

  

    return Categoria;

}