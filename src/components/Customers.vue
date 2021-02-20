<template>
  <div class="customers container">
    <h1 class="page-header">Manage Customers</h1>
    <table class="table table-striped"></table>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers" :key="customer.id">
          <td>{{customer.first_name}}</td>
          <td>{{customer.last_name}}</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Customers",
  data() {
    return {
      customers: []
    };
  },

  methods: {
    fetchCustomers() {
      fetch("http://localhost:8888/api/customers")
        .then(res => res.json())
        .then(data => (this.customers = data));
    }
  },

  created() {
    this.fetchCustomers();
  }
};
</script>

<style lang="scss" scoped></style>
