@echo off
::set this variable to be your game directory
set gameDir=d:\Steam\steamapps\common\Cyberpunk 2077\archive\pc

::set this variable to be your mod download folder (MAKE SURE THEY ARE UNZIPPED)
set modDir=c:\Users\block\Downloads\Weather Probability Rebalance-3196-2-7-1701912933

CD /D %modDir%

for %%G in ("c:\Users\block\Downloads\Weather Probability Rebalance-3196-2-7-1701912933") do (
    echo current iteration: %%G
    cd %%G
    echo Current Directory: %cd%
    pause
)
cd /d %modDir%