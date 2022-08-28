/* create database dbfint; */
use dbfint;

create table tblmoeda(
	idmoeda int auto_increment,
	descricaomoeda varchar(30),
	primary key(idmoeda)
);

create table tblusuario(
	idusuario int auto_increment,
	idmoeda int null,
    nomeusuario varchar(200),
    emailusuario varchar(100) unique,
    senhausuario varchar(50),
    cpfusuario varchar(15) unique,
    foneusuario varchar(20) unique,
    datanascusuario datetime,
	datacadastrousuario datetime,
    primary key(idusuario),
	foreign key(idmoeda) references tblmoeda(idmoeda)
);

create table tblcredito(
	idcredito int auto_increment,
    idusuario int null,
    qtdcredito int,
    dataatualizacaocredito datetime,
    primary key(idcredito),
    foreign key(idusuario) references tblusuario(idusuario)
);

create table tblmetodopagamento(
	idmetodopagamento int auto_increment,
	descricaometodopagamento varchar(100),
	primary key(idmetodopagamento)
);

create table tblassinatura(
	idassinatura int auto_increment,
    descricaoassinatura varchar(50),
    valormesassinatura decimal(5,2),
	periodoassinatura int,
    primary key(idassinatura)
);

create table tblpedido(
	idpedido int auto_increment,
    idusuario int null,
    idassinatura int null,
    idmetodopagamento int null,	
    datapedido datetime,
    descricaopedido varchar(50),
    qtdecreditosusados int,
	qtdeparcelas int,
    primary key(idpedido),
    foreign key(idusuario) references tblusuario(idusuario),
    foreign key(idassinatura) references tblassinatura(idassinatura),
    foreign key(idmetodopagamento) references tblmetodopagamento(idmetodopagamento)
);



create table tbltipousuario(
	idassinatura int null,
    idusuario int null,
    descricaotipousuario varchar(50),
    datamudancatipousuario datetime,
    foreign key(idassinatura) references tblassinatura(idassinatura),
    foreign key(idusuario) references tblusuario(idusuario)
);

create table tblsimulacao(
	idsimulacao int auto_increment,
    idusuario int null,
    descricaosimulacao varchar(100),
    valorinicialsimulacao decimal,
    taxacorretagemsimulacao decimal,
    datainicialsimulacao datetime,
    datafinalsimulacao datetime,
    primary key(idsimulacao),
    foreign key(idusuario) references tblusuario(idusuario)
);

create table tbltipomovimentacao(
	idtipomovimentacao int auto_increment,
    descricaotipomovimentacao varchar(30),
    primary key(idtipomovimentacao)
);

create table tblcategoria(
	idcategoria int auto_increment,
    idusuario int null,
    idtipomovimentacao int null,
    descricaocategoria varchar(100),
    corcategoria varchar(7), /*hexadecimal*/
    primary key(idcategoria),
    foreign key(idusuario) references tblusuario(idusuario),
    foreign key(idtipomovimentacao) references tbltipomovimentacao(idtipomovimentacao)
);

create table tbldetalhemovimentacao(
	iddetalhemovimentacao int auto_increment,
	descricaodetalhemovimentacao varchar(50),
	primary key(iddetalhemovimentacao)
);

create table tblmovimentacao(
	idmovimentacao int auto_increment,
    idusuario int null,
    idtipomovimentacao int null,
    idcategoria int null,
	iddetalhemovimentacao int null,
    observacaomovimentacao varchar(300),
    valormovimentacao decimal,
    datamovimentacao datetime,
    primary key(idmovimentacao),
    foreign key(idusuario) references tblusuario(idusuario),
    foreign key(idtipomovimentacao) references tbltipomovimentacao(idtipomovimentacao),
    foreign key(iddetalhemovimentacao) references tbldetalhemovimentacao(iddetalhemovimentacao),
    foreign key(idcategoria) references tblcategoria(idcategoria)
);
