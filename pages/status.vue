<template>
  <div class="container">
    <h1>{{ ping.text }} {{ pong.text }}!</h1>
  </div>
</template>

<script>
export default {
  asyncData: async function({ $config: { baseUrl }, params }) {
    let res = null;

    res = await fetch(`${baseUrl}/api/status/ping`);
    res = await res.json();
    const ping = { text: res.ping };

    res = await fetch(`${baseUrl}/api/status/pong`);
    res = await res.json();
    const pong = { text: res.pong };

    return {
      ping,
      pong,
    };
  },
};
</script>
