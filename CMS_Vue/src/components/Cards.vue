<template>
    <div class="cards-grid">
        <div class="card" v-for="person in persons" :key="person.id">
            <img :src="person.image" :alt="person.firstname + ' ' + person.lastname" class="card-image" />
            <h3 class="card-name">{{ person.firstname }} {{ person.lastname }}</h3>
            <p class="card-description">{{ person.email }} <br></br> {{ person.phone }} <br></br> {{ person.birthday }} <br></br> {{ person.address.street }} <br></br> {{ person.address.city }} <br></br> {{ person.address.country }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Cards",
    data() {
        return {
            persons: []
        };
    },
    async mounted() {
        try {
            const response = await fetch('https://fakerapi.it/api/v2/persons?_quantity=10');
            const data = await response.json();
            this.persons = data.data.map(person => ({
                ...person,
                image: person.image 
            }));
        } catch (error) {
            this.persons = [];
        }
    }
}
</script>

<style scoped>
.cards-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    padding: 1rem;
    justify-items: center;
}

.card {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.07);
    text-align: center;
    transition: box-shadow 0.2s;
    width: 294px;
    height: 486px;
}

.card:hover {
    box-shadow: 0 4px 16px rgba(0,0,0,0.12);
}

.card-image {
    width: 294px;
    height: 278.87px;
    border-radius: 6px;
}

.card-name {
    margin: 0.5rem 0 0.25rem;
    font-size: 1.1rem;
    font-weight: 600;
}

.card-description {
    color: #555;
    font-size: 0.95rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
}

@media (max-width: 900px) {
    .cards-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
@media (max-width: 600px) {
    .cards-grid {
        grid-template-columns: 1fr;
    }
}
</style>