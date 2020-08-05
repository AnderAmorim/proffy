import React from "react";

import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";

import "./styles.css";

const TeacherList: React.FC = () => {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject" placeholder="Matéria" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day">Dia da Semana</label>
                        <input
                            type="text"
                            id="week_day"
                            placeholder="Dia da semana"
                        />
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Horário</label>
                        <input type="text" id="" placeholder="Horário" />
                    </div>
                </form>
            </PageHeader>

            <main>
                <TeacherItem
                    name="Anderson Amorim"
                    class="Culinária"
                    description="Um exímio chefe de cozinha querendo fazer várias panquecas"
                    pricePerHour="R$1500,00"
                />
                <TeacherItem
                    name="Thaynara Gama"
                    class="Especialista em doces"
                    description="Doutorado em reproduzir e criar diversas receitas de doces!"
                    pricePerHour="R$1000,99"
                />
            </main>
        </div>
    );
};

export default TeacherList;
