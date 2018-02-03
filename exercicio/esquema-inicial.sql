create table contato(

	idcontato integer not null primary key autoincrement,
	nome varchar(50) not null,
	telefone varchar (50) not null,
	datacadastro timestamp not null default current_timestamp
);