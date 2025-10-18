<script>
  // Replace '#copyInvite' with the ID of your button
  const copyButton = document.getElementById('copyInvite');

  copyButton.addEventListener('click', () => {
    const inviteLink = "https://discord.gg/YourServerInvite"; // Replace with your invite link
    navigator.clipboard.writeText(inviteLink).then(() => {
      alert("Discord invite copied!"); // Optional: simple feedback
    }).catch(err => {
      alert("Failed to copy invite.");
      console.error(err);
    });
  });
</script>
