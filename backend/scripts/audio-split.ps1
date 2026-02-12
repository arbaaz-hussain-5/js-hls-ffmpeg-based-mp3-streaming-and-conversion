param(
    [string]$Username,
    [string]$Result
)

cd $Result
mkdir $Username
ffmpeg -err_detect ignore_err -i ../input/$Username.mp3 -map 0:a -c:a aac -ar 44100 -b:a 128k -f hls -hls_time 10 -hls_list_size 0 ./$Username/$Username.m3u8

