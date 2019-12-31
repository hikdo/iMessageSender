on run {targetBuddyPhone, targetMessage, imagePath}
tell application "Messages"
    set targetService to 1st service whose service type = iMessage
    set targetBuddy to buddy targetBuddyPhone of targetService
    set imageFile to (imagePath as POSIX file)
    send targetMessage to targetBuddy
    send file imageFile to targetBuddy
end tell
end run
