<template>
  <div class="add container">
    <h1 class="page-header">Add Customer</h1>
    <form v-on:submit="addCustomer">
      <div class="well">
          <h4>Customer info</h4>
          <div class="form-group">
              <label>First Name</label>
              <input type="text" class="form-control" placeholder="First Name" v-model="customer.first_name">
          </div>
          <div class="form-group">
              <label>Last Name</label>
              <input type="text" class="form-control" placeholder="First Name" v-model="customer.last_name">
          </div>
      </div>
      <div class="well">
          <h4>Customer contact</h4>
          <div class="form-group">
              <label>Email</label>
              <input type="text" class="form-control" placeholder="Email" v-model="customer.email">
          </div>
          <div class="form-group">
              <label>Phone</label>
              <input type="text" class="form-control" placeholder="First Name" v-model="customer.phone">
          </div>
      </div>
      <div class="well">
          <h4>Customer Location</h4>
          <div class="form-group">
              <label>Address</label>
              <input type="text" class="form-control" placeholder="Address" v-model="customer.address">
          </div>
          <div class="form-group">
              <label>City</label>
              <input type="text" class="form-control" placeholder="City" v-model="customer.city">
          </div>
          <div class="form-group">
              <label>State</label>
              <input type="text" class="form-control" placeholder="State" v-model="customer.state">
          </div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Add",
  data() {
    return {
      customer: ""
    };
  },
  methods: {
    addCustomer() {}
  }
};
</script>

<style lang="scss" scoped></style>
