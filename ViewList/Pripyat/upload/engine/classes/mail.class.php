<?php
/*
=====================================================
 DataLife Engine - by SoftNews Media Group 
-----------------------------------------------------
 https://dle-news.ru/
-----------------------------------------------------
 Copyright (c) 2004,2022 SoftNews Media Group
-----------------------------------------------------
 You use Demo Version of DataLife Engine
=====================================================
*/
?><?php $_F=__FILE__;$_X='P0kgP2RQZA1qdSoNajg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4DWpKVWtla25tCjRKOTJFbTI0Si1KdntKRHMKZTY0NXdKPTRNbWtKPl1zVmRKDWotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLQ1qSlBlZWQ6dXVNRjQtMjQ1dzNdVnUNai0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tDWpKVHNke11tRVBlSihOKUpBV1dLLUFXQUFKRHMKZTY0NXdKPTRNbWtKPl1zVmQNajg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4DWpKYlBtd0pOc000Sm13SmRdc2U0TmU0TUp2e0pOc2R7XW1FUGUNajg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4DWpKaG1GNDpKSGttRjNORmt3dzNkUGQNai0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tDWpKLnc0Oko9a21GSk5Ga3d3DWo4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4OA1qKnUNalZ3NEpYfVg9a21GNF1cWH1YPWttRjRdXFh9WD1rbUY0XTsNalZ3NEpYfVg9a21GNF1cWH1YPWttRjRdXEQ9Ylg7DWpWdzRKWH1YPWttRjRdXFh9WD1rbUY0XVw5Zk40ZGVtczI7DWoNam0KKEohTTQKbTI0TShKJ1VCYkJuY2g5OTY+YzY5J0opSilKUg1qCVA0a000XShKIn1iYlh1YTNhSktXUUpoc112bU1NNDIiSik7DWoJUDRrTTRdSihKJ25zTmtlbXMyOkozM3UzM3UnSik7DWoJTW00KEoifWtON20yRUprZWU0SGRlISJKKTsNanANag1qXTQvVm1dNF9zMk40SihVbjlYRlZFbTJ3OjpUUDRONyg8Z2diX1VjPEozSid1NDJFbTI0dU5Ga3d3NHd1SGttRnVORmt3dzNkUGRIa21GNF0zZFBkJykpOw1qXTQvVm1dNF9zMk40SihVbjlYRlZFbTJ3OjpUUDRONyg8Z2diX1VjPEozSid1NDJFbTI0dU5Ga3d3NHd1SGttRnV3SGVkM2RQZCcpKTsNal00L1ZtXTRfczJONEooVW45WEZWRW0ydzo6VFA0TjcoPGdnYl9VYzxKM0ondTQyRW0yNHVORmt3dzR3dUhrbUZ1NGZONGRlbXMyM2RQZCcpKTsNag1qTkZrd3dKTUY0X0hrbUZKUg1qDWoJZFZ2Rm1OSiRIa21GSjhKCmtGdzQ7DWoJZFZ2Rm1OSiR3NDJNXzRdXXNdSjhKCmtGdzQ7DWoJZFZ2Rm1OSiR3SGVkX0h3RUo4SiIiOw1qCWRWdkZtTkokCl1zSEo4SgprRnc0Ow1qCWRWdkZtTkokUGVIRl9Ia21GSjhKCmtGdzQ7DWoJZFZ2Rm1OSiR2Tk5KOEprXV1re0ooKTsNaglkVnZGbU5KJDc0NGRrRm1yNEo4SgprRnc0Ow1qCQ1qCQpWMk5lbXMySl9fTnMyd2VdVk5lKCROczIKbUUsSiRtd19QZUhGSjhKCmtGdzQpSlINagkJDWoJCSRlUG13LUlIa21GSjhKMjQ1Slh9WD1rbUY0XShlXVY0KTsNagkJJGVQbXctSUhrbUYtSVRQa11ENGVKOEonVmUKLVsnOw1qCQkkZVBtdy1JSGttRi1JOTJOc01tMkVKOEoidmt3NHhLIjsNag1qCQkkTnMyCm1FTCdIa21GX2VtZUY0J2lKOEp3ZV1fXTRkRmtONChKJyZrSGQ7JyxKJyYnLEokTnMyCm1FTCdIa21GX2VtZUY0J2lKKTsNag1qCQltCihKJE5zMgptRUwnSGttRl9lbWVGNCdpSilKUg1qCQkJJGVQbXctSUhrbUYtSXc0ZWhdc0goJE5zMgptRUwna01IbTJfSGttRidpLEokTnMyCm1FTCdIa21GX2VtZUY0J2kpOw1qCQlwSjRGdzRKUg1qCQkJJGVQbXctSUhrbUYtSXc0ZWhdc0goSiROczIKbUVMJ2tNSG0yX0hrbUYnaUopOw1qCQlwDWoJCQ1qCQltCigkTnMyCm1FTCdIa21GX0g0ZXNNJ2lKODhKIndIZWQiKUpSDWoJCQkNanV1CQkJJGVQbXctSUhrbUYtSUQ9YlhVNHZWRUo4SkQ9Ylg6OlU5MC4+X0Q5PHQ5PDsNag1qCQkJJGVQbXctSUhrbUYtSW13RD1iWCgpOw1qCQkJJGVQbXctSUhrbUYtSWJtSDRzVmVKOEphVzsNagkJCSRlUG13LUlIa21GLUlEPWJYQlZlc2JuREo4SgprRnc0Ow1qCQkJJGVQbXctSUhrbUYtSX1zd2VKOEokTnMyCm1FTCd3SGVkX1Bzd2UnaTsNagkJCSRlUG13LUlIa21GLUlYc11lSjhKbTJlcmtGKEokTnMyCm1FTCd3SGVkX2RzXWUnaUopOw1qCQkJJGVQbXctSUhrbUYtSUQ9YlhENE5WXTRKOEokTnMyCm1FTCd3SGVkX3c0TlZdNCdpOw1qDWoJCQltCigkZVBtdy1JSGttRi1JRD1iWEQ0TlZdNEo4OEond3dGJylKUg1qCQkJCSRlUG13LUlIa21GLUlEPWJYZ2RlbXMyd0o4SmtdXWt7KCJ3d0YiOElrXV1reygicjRdbQp7X2Q0NF0iOEkKa0Z3NCwicjRdbQp7X2Q0NF1fMmtINCI4SQprRnc0KSk7DWoJCQlwDWoNagkJCW0KKCRlUG13LUlIa21GLUlEPWJYRDROVl00Sjg4SidlRncnKUpSDWoJCQkJJGVQbXctSUhrbUYtSUQ9YlhnZGVtczJ3SjhKa11da3soImVGdyI4SWtdXWt7KCJyNF1tCntfZDQ0XSI4SQprRnc0LCJyNF1tCntfZDQ0XV8ya0g0IjhJCmtGdzQpKTsNagkJCXANag1qCQkJbQooSiROczIKbUVMJ3dIZWRfVnc0XSdpSilKUg1qCQkJCSRlUG13LUlIa21GLUlEPWJYQlZlUEo4SmVdVjQ7DWoJCQkJJGVQbXctSUhrbUYtSS53NF0ya0g0SjhKJE5zMgptRUwnd0hlZF9WdzRdJ2k7DWoJCQkJJGVQbXctSUhrbUYtSVhrd3c1c11NSjhKJE5zMgptRUwnd0hlZF9ka3d3J2k7DWoJCQlwDWoJCQkNagkJCW0KKEokTnMyCm1FTCd3SGVkX0hrbUYnaUopSlINagkJCQkkZVBtdy1JSGttRi1JaF1zSEo4SiROczIKbUVMJ3dIZWRfSGttRidpOw1qCQkJCSRlUG13LUlIa21GLUlENDJNNF1KOEokTnMyCm1FTCd3SGVkX0hrbUYnaTsNagkJCXANagkJcA1qCQkNagkJJGVQbXctSUhrbUYtSXk9a21GNF1KOEoiVW45SlQ9RCI7DWoJCQ1qCQltCkooSiRtd19QZUhGSilKUg1qCQkJJGVQbXctSUhrbUYtSW13fWI9bigpOw1qCQkJJGVQbXctSVBlSEZfSGttRko4SmVdVjQ7DWoJCXANaglwDWoJDWoJClYyTmVtczJKdzQyTSgkZXMsSiR3VnYxNE5lLEokSDR3d2tFNClKUg1qCQ1qCQllXXtKUg1qCQkJDWoJCQltCihKJGVQbXctSQpdc0hKKUpSDWoJCQkJJGVQbXctSUhrbUYtSWtNTTw0ZEZ7YnMoJGVQbXctSQpdc0gsSiRlUG13LUkKXXNIKTsNagkJCXANagkJCQ1qCQkJJGVQbXctSUhrbUYtSWtNTUJNTV00d3coJGVzKTsNagkJCSRlUG13LUlIa21GLUlEVnYxNE5lSjhKJHdWdjE0TmU7DWoJCQkNagkJCW0KKCRlUG13LUlIa21GLUk9a21GNF1KODhKJ3dIZWQnSkI2VUokZVBtdy1JNzQ0ZGtGbXI0SilKUg1qCQkJCSRlUG13LUlIa21GLUlEPWJYWjQ0ZEJGbXI0SjhKZV1WNDsNagkJCXANagkJCQ1qCQkJbQooSiRlUG13LUlQZUhGX0hrbUZKKUpSDWoJCQkJJGVQbXctSUhrbUYtSUh3RX1iPW4oJEg0d3drRTQpOw1qCQkJcEo0Rnc0SlINagkJCQkkZVBtdy1JSGttRi1JMHNNe0o4SiRINHd3a0U0Ow1qCQkJcA1qCQ1qCQkJbQooSk5zVjJlKEokZVBtdy1Jdk5OSilKKUpSDWoJCQkJDWoJCQkJCnNdNGtOUCgkZVBtdy1Jdk5OSmt3SiR2Tk4pSlINagkJCQkJJGVQbXctSUhrbUYtSWtNTTBUVCgkdk5OKTsNagkJCQlwDWoJCQkJDWoJCQlwDWoJCQ1qCQkJJGVQbXctSUhrbUYtSXc0Mk0oKTsNagkJCQ1qCQlwSk5rZU5QSig5Zk40ZGVtczJKJDQpSlINagkJCQ1qCQkJJGVQbXctSXdIZWRfSHdFSjhKZV1tSChKJDQtSTRdXXNdPTR3d2tFNCgpSik7DWoJCQkNagkJCSRlUG13LUl3SGVkX0h3RUo4SndlXV9dNGRGa040SignIicsSidcIicsSiRlUG13LUl3SGVkX0h3RSk7DWoJCQkkZVBtdy1Jd0hlZF9Id0VKOEp3ZV1fXTRkRmtONChKIlIiLEonJyxKJGVQbXctSXdIZWRfSHdFSik7DWoJCQkkZVBtdy1Jd0hlZF9Id0VKOEp3ZV1fXTRkRmtONChKInAiLEonJyxKJGVQbXctSXdIZWRfSHdFSik7DWoJCQkkZVBtdy1Jd0hlZF9Id0VKOEp3ZV1fXTRkRmtONChKIlxdIixKJycsSiRlUG13LUl3SGVkX0h3RUopOw1qCQkJJGVQbXctSXdIZWRfSHdFSjhKd2VdX100ZEZrTjQoSiJcMiIsSicnLEokZVBtdy1Jd0hlZF9Id0VKKTsNagkJCSRlUG13LUl3SGVkX0h3RUo4SndlXV9dNGRGa040KEoiXGUiLEonJyxKJGVQbXctSXdIZWRfSHdFSik7DWoJCQ1qCQkJJGVQbXctSXc0Mk1fNF1dc11KOEplXVY0Ow1qCQkJDWoJCXANagkJDWoJCSRlUG13LUlIa21GLUlORjRrXUJGRjw0Tm1kbTQyZXcoKTsNagkJJGVQbXctSUhrbUYtSU5GNGtdQmVla05QSDQyZXcoKTsNagkJJGVQbXctSUhrbUYtSU5GNGtdVFZ3ZXNIfTRrTTRddygpOw1qCQ1qCXANag1qSkpKSgpWMk5lbXMySmtNTVRWd2VzSH00a000XSgkMmtINCxKJHJrRlY0SjhKMlZGRilKUg1qSkpKSkpKSkokZVBtdy1JSGttRi1Ja01NVFZ3ZXNIfTRrTTRdKEokMmtINCxKJHJrRlY0Sik7DWpKSkpKcA1qDWoJClYyTmVtczJKa01NQmVla05QSDQyZSgkZGtlUCxKJDJrSDRKOEonJyxKJDQyTnNNbTJFSjhKJ3ZrdzR4SycsSiRle2Q0SjhKJycsSiRNbXdkc3dtZW1zMko4SidrZWVrTlBINDJlJylKUg1qCQkkZVBtdy1JSGttRi1Ja01NQmVla05QSDQyZShKJGRrZVAsSiQya0g0LEokNDJOc01tMkUsSiRle2Q0LEokTW13ZHN3bWVtczJKKTsNaglwDWpwDWo/SQ==';$_D=strrev('edoced_46esab');eval($_D('JF9YPWJhc2U2NF9kZWNvZGUoJF9YKTskX1g9c3RydHIoJF9YLCdqWHlnNjd7YWtuPTlvNDFXR3BDWjBGU1EzUj5jVEQ8Sk52LmxZSHd1eAo1ZiBlYnFLMkEvXUJVOH10T3N6ZGlNW1ZFTHJQbWhJJywnClBYT05reTFhTE1FWmVqMHp9SktCbDUzLntHSUNTUiBjYlVXUW1zLzZmd3g8dFQ3NG4ycXJBRD1IVjlvWXBdZDh1Z1t2aGlGPicpOyRfUj1zdHJfcmVwbGFjZSgnX19GSUxFX18nLCInIi4kX0YuIiciLCRfWCk7ZXZhbCgkX1IpOyRfUj0wOyRfWD0wOw=='));?>